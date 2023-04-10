
# IBANKING
[![NPM](https://nodei.co/npm/mutasi-scraper.png?compact=true)](https://npmjs.org/package/mutasi-bca)


NodeJS Package for scraping settlement (mutasi) in iBank indonesia

![Screenshot 2022-06-02 113138](https://user-images.githubusercontent.com/31664438/230940339-b180c200-0749-4db3-a1f2-3deb72359f24.png)


# Mutasi Scraper

Library untuk membantu anda mendapatkan informasi mutasi dari iBanking anda 
banyak fungsi yang akan didapatkan jika kalian bisa mengimplementasikannya kedalam kebutuhan yang ada , semisal auto accept payment , auto transfer , auto cek , dsb

# Pre requirements

 - Windows / Linux
 - Nodejs 16+
 - Google chrome

## Cara Install

```bash
npm install --save mutasi-scraper
```

atau

```bash
npm install https://github.com/fdciabdul/mutasi-Scraper
```


## Penggunaan

```javascript
const {ScrapBCA} = require('./lib/bank/BCA.class.js');
```

## Test

```bash
npm run example
```

### BCA (working)

```javascript

const {ScrapBCA} = require('./lib/bank/BCA.class.js');

const user = 'USER';
const pass = 'PASS';

const scraper = new ScrapBCA(user, pass);
scraper.getSettlement("1", "3", "24", "3").then((page) => {
    // tanggalawal,bulanawal,tanggalakhir,bulanakhir
    console.log(page);
  }).catch((e) => {
    console.log(e);
  });
```

### BRI (error)

```javascript

const scraper = new ScraperBank("user", "pass"); // username dan password akun ibanking
(async () => {
    var result = await scraper.getBRI("norek");
    console.log(result);
})();
```

### MANDIRI (error)

untuk mandiri karna web ibank biasanya mati , kalian bisa pakai yang ini 

https://github.com/fdciabdul/MIB-Mutasi-Scraper

### DANAMON (error)

```javascript

const scraper = new ScraperBank("user", "pass"); // username dan password akun ibanking
(async () => {
    var result = await scraper.getDanamon();
    console.log(result);
})();
```

### NOTE 

guys karna saya tidak punya akun ibanking dari beberapa bank yang error , jika kalian ingin bank lain ditambahkan atau di fix silahkan email saya :)

### CONFIGURATION

```javascript

const scraper = new ScraperBank("user", "pass" , {
    headless : false , // set false jika ingin memunculkan browser
```

# License

[MIT](https://github.com/fdciabdul/BCA-Mutasi-Scraper)

# Code By
[Abdul Muttaqin](mailto:abdulmuttaqin456@gmail.com)

# CP 

abdulmuttaqin456@gmail.com