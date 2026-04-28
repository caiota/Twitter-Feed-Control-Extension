
//ALGORITIMO PARA COMPARAR IMAGENS EM BUSCA DE SPAM (não implementado ainda)
async function loadImage(url) {
  const response = await fetch(url);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(blob);
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}
function getAHash(img) {
  const size = 16;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = size;
  canvas.height = size;

  ctx.drawImage(img, 0, 0, size, size);
  const data = ctx.getImageData(0, 0, size, size).data;

  let grayscale = [];
  let total = 0;

  for (let i = 0; i < data.length; i += 4) {
    const val = (data[i] + data[i+1] + data[i+2]) / 3;
    grayscale.push(val);
    total += val;
  }

  const avg = total / grayscale.length;

  return grayscale.map(v => v > avg ? "1" : "0").join("");
}
function getDHash(img) {
  const width = 33;
  const height = 32;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(img, 0, 0, width, height);
  const data = ctx.getImageData(0, 0, width, height).data;

  const gray = [];
  for (let i = 0; i < data.length; i += 4) {
    gray.push((data[i] + data[i+1] + data[i+2]) / 3);
  }

  let hash = "";

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width - 1; x++) {
      const left = gray[y * width + x];
      const right = gray[y * width + x + 1];
      hash += left > right ? "1" : "0";
    }
  }

  return hash;
}
function getPHash(img) {
  const size = 32;
  const smallerSize = 8;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = size;
  canvas.height = size;

  ctx.drawImage(img, 0, 0, size, size);
  const data = ctx.getImageData(0, 0, size, size).data;

  const gray = [];
  for (let i = 0; i < data.length; i += 4) {
    gray.push((data[i] + data[i+1] + data[i+2]) / 3);
  }

  function dct2D(matrix, N) {
    const result = new Array(N * N).fill(0);

    for (let u = 0; u < N; u++) {
      for (let v = 0; v < N; v++) {
        let sum = 0;
        for (let i = 0; i < N; i++) {
          for (let j = 0; j < N; j++) {
            sum +=
              matrix[i * N + j] *
              Math.cos(((2*i+1)*u*Math.PI)/(2*N)) *
              Math.cos(((2*j+1)*v*Math.PI)/(2*N));
          }
        }
        result[u * N + v] = sum;
      }
    }
    return result;
  }

  const dct = dct2D(gray, size);

  const lowFreq = [];
  for (let i = 0; i < smallerSize; i++) {
    for (let j = 0; j < smallerSize; j++) {
      if (i !== 0 || j !== 0) {
        lowFreq.push(dct[i * size + j]);
      }
    }
  }

  const avg = lowFreq.reduce((a,b)=>a+b,0) / lowFreq.length;

  return lowFreq.map(v => v > avg ? "1" : "0").join("");
}
function hammingDistance(a, b) {
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff++;
  }
  return diff;
}

function similarity(a, b) {
  return (1 - hammingDistance(a,b) / a.length) * 100;
}
async function compareImagesFull(url1, url2) {

  const img1 = await loadImage(url1);
  const img2 = await loadImage(url2);

  const a1 = getAHash(img1);
  const d1 = getDHash(img1);
  const p1 = getPHash(img1);

  const a2 = getAHash(img2);
  const d2 = getDHash(img2);
  const p2 = getPHash(img2);

  const simA = similarity(a1, a2);
  const simD = similarity(d1, d2);
  const simP = similarity(p1, p2);

  const finalScore = (simA + simD + simP) / 3;

  return {
    aHash: simA,
    dHash: simD,
    pHash: simP,
    final: finalScore
  };
}

//COMO USAR
//compareImagesFull(url1, url2)
async function CU(){
const result = await compareImagesFull(
  'https://pbs.twimg.com/media/HCH0JEKXoAEG8x1?format=png&name=360x360',
  'https://pbs.twimg.com/media/HCHyDBhagAACxxa?format=jpg&name=360x360'
);

console.log("Resultado completo:", result);

const finalScore = parseFloat(result.final);

console.log(`Similaridade final: ${finalScore}%`);

if (finalScore > 90) {
  console.log(" Quase idêntica");
} else if (finalScore > 70) {
  console.log(" Bem parecida");
} else {
  console.log(" Diferente");
}

const suspicious =
  result.dHash > 90 ||
  (result.pHash > 85 && result.aHash > 80);

if (suspicious) {
  console.log("🚨 POSSÍVEL REPOST / GOLPE");
}
}