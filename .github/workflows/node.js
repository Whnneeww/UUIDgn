const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// UUIDを生成
const uuid = uuidv4();

// txtファイルにUUIDを書き込み
fs.writeFile('uuid.txt', uuid, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('uuid.txtファイルが生成されました。');
});
