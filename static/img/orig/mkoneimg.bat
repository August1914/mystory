#! /bin/bash

file=$1
cat "$file.jpg ../jpg/"
cp $file.jpg ../jpg/
cp $file.jpg ../jpg/sm/

sips -Z 1200 $file.jpg --out ../jpg/
sips -Z 800 ../jpg/$file.jpg --out ../jpg/sm/
cwebp -q 60 "$file.jpg" -o "../webp/$file.webp"; 
cwebp -q 30 "$file.jpg" -o "../webp/sm/$file.webp";

