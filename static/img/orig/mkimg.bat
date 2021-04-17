#! /bin/bash

cp *.jpg ../jpg/
cp *.jpg ../jpg/sm/

sips -Z 1200 *.jpg --out ../jpg/
sips -Z 800 ./jpg/*.jpg --out ../jpg/sm/
`for file in ../jpg/*; do
  filename=$(basename -- "$file")
  extension="${filename##*.}"
  filename="${filename%.*}"
  cwebp -q 60 "$file" -o "../webp/${filename%.*}.webp"; 
done`
`for file in ../jpg/*; do
  filename=$(basename -- "$file")
  extension="${filename##*.}"
  filename="${filename%.*}"
  cwebp -q 30 "$file" -o "../webp/sm/${filename%.*}.webp";
done`

