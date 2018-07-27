function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
<<<<<<< HEAD
    array.push("I am 1 strange loop.");
    } else { array.push("I am ${i} strange loops.");
    }
  }
  return array
=======
    console.log("I am 1 strange loop.");
    } else { console.log("I am ${i} strange loops.");
    }
  }
>>>>>>> f2c3e499de2f199627eac034a07ab38118367488
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
    if (n === 0) {
<<<<<<< HEAD
      return('done')
    }
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    console.log(array)
    } while (array.length > 0 && maybeTrue());
    array.shift()
    return array
}
=======
      console.log('done')
    }
}
>>>>>>> f2c3e499de2f199627eac034a07ab38118367488
