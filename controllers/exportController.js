import User from '../models/user.model.js';
import exportCSV from '../utils/export-csv.js';
import PDFDocumentWithTables from 'pdfkit-table';
import path from 'path';
import fs from 'fs';

export const exportUsersCSV = async (req, res) => {
   try {
      const users = await User.findAll()
      const usersExport = await exportCSV(users)
      res.status(200).json({
         message: "Users exported successfully",
         data: usersExport
      })
   } catch (err) {
      res.status(500).json({ message: "Error exporting users to CSV", error: err.message })
   }
}

export const exportUsersPDF = async (req, res) => {
   try {
      const users = await User.findAll()
      const doc = new PDFDocumentWithTables()
      const exportPath = path.join(process.cwd(), "files", 'users.pdf');

      const stream = fs.createWriteStream(exportPath);
      doc.pipe(stream);

      doc.fontSize(20).text("User List", { align: "center" });
      doc.moveDown();

      const table = {
         headers: [
            { label: 'ID', property: 'id', width: 50 },
            { label: 'First Name', property: 'firstName', width: 150 },
            { label: 'Email', property: 'email', width: 200 },
            { label: 'Age', property: 'age', width: 50 }
         ],
         datas: users
      }

      await doc.table(table, {
         prepareHeader: () => doc.font('Helvetica-Bold').fontSize(12),
         prepareRow: (row, index) => doc.font('Helvetica').fontSize(10)
      });

      doc.end();

      stream.on('finish', () => {
         res.status(200).json({
            message: "Users exported successfully to PDF",
            filePath: exportPath
         });
      });

   } catch (err) {
      res.status(500).json({ message: "Error exporting users to PDF", error: err.message });
   }

}