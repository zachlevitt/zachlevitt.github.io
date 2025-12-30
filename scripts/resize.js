import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.join('../static/art');
const outputDir = path.join('../static/art/resized');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}
const files = fs.readdirSync(inputDir);
files.forEach(file => {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, file);
        sharp(inputFilePath)
            .resize(800)
            .toFile(outputFilePath, (err, info) => {
                if (err) {
                    console.error('Error resizing file:', file, err);
                } else {
                    console.log('Resized:', file, info);
                }
            });
    });

