import * as fs from 'fs-extra';
import * as path from 'path';

const sourceDir = path.join( 'src', 'posts');
const targetDir = path.join( 'src', 'app', 'posts');

console.log(sourceDir, targetDir)

async function moveFiles() {
    try {
        const files = await fs.readdir(sourceDir);

        for (const file of files) {
            const sourceFilePath = path.join(sourceDir, file);
            const fileNameWithoutExtension = path.parse(file).name;
            const targetFolderPath = path.join(targetDir, fileNameWithoutExtension);
            const targetFilePath = path.join(targetFolderPath, 'page.mdx');

            // Create the target directory if it doesn't exist
            await fs.ensureDir(targetFolderPath);

            // Move the file
            console.log(`Moving ${sourceFilePath} to ${targetFilePath}`)
            await fs.move(sourceFilePath, targetFilePath, { overwrite: true });
        }

        console.log('Files moved successfully');
    } catch (error) {
        console.error('Error moving files:', error);
    }
}

moveFiles();
