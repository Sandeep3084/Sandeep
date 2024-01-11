We are given two pixelated images in a png format and we have to merge them in order to get the flag. This is done using a method called Visual cryptography.
The code is:
import numpy as np
from PIL import Image

# Open images
im1 = Image.open("scrambled1.png")
im2 = Image.open("scrambled2.png")

# Make into Numpy arrays
im1np = np.array(im1)
im2np = np.array(im2)

# Add images
result = im2np + im1np
# Convert back to PIL image and save
Image.fromarray(result).save('result.png')

The output contains the flag picoCTF{0542dc1d}.
