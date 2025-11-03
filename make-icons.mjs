// scripts/make-icons.mjs
import sharp from "sharp";

const src = "public/logo_noBG.png"; // use your biggest, clean logo
await sharp(src).resize(192, 192).png().toFile("public/logo-192.png");
await sharp(src).resize(512, 512).png().toFile("public/logo-512.png");

console.log("✅ Wrote public/logo-192.png and public/logo-512.png");
