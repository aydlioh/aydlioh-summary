import sharp from 'sharp';
import fs from 'fs/promises';
import readline from 'readline';
import path from 'path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

try {
  const imagePath = await askQuestion('Введите путь к изображению: ');

  rl.close();

  const directory = path.dirname(imagePath.trim());
  const ext = path.extname(imagePath.trim());
  const baseName = path.basename(imagePath.trim(), ext);

  const outputImagePath = path.join(directory, `${baseName}-sharp${ext}`);

  const imageBuffer = await sharp(imagePath.trim())
    .resize(1000)
    .jpeg({ mozjpeg: true })
    .toBuffer();

  await fs.writeFile(outputImagePath, imageBuffer);

  console.log(
    `Изображение успешно обработано и сохранено в ${outputImagePath}`
  );
} catch (error) {
  console.error('Произошла ошибка:', error.message);
}
