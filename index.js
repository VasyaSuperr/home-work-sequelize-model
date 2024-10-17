const { Op, where } = require('sequelize');
const { sequelize, Phone } = require('./models');

// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync OK'))
//   .catch(err => console.log(err));

//CRUD
(async function () {
  try {
    const phones = [
      {
        model: 'iPhone 13 Pro',
        brand: 'Apple',
        yearOfManufacture: '2021-09-24',
        ramSize: 6,
        processor: 'Apple A15 Bionic',
        screenSize: 6.1,
        hasNFC: true,
      },
      {
        model: 'Galaxy S21',
        brand: 'Samsung',
        yearOfManufacture: '2021-01-14',
        ramSize: 8,
        processor: 'Exynos 2100',
        screenSize: 6.2,
        hasNFC: true,
      },
      {
        model: 'Pixel 6',
        brand: 'Google',
        yearOfManufacture: '2021-10-28',
        ramSize: 8,
        processor: 'Google Tensor',
        screenSize: 6.4,
        hasNFC: true,
      },
      {
        model: 'Xperia 1 III',
        brand: 'Sony',
        yearOfManufacture: '2021-05-21',
        ramSize: 12,
        processor: 'Snapdragon 888',
        screenSize: 6.5,
      },
      {
        model: 'OnePlus 9 Pro',
        brand: 'OnePlus',
        yearOfManufacture: '2021-03-23',
        ramSize: 12,
        processor: 'Snapdragon 888',
        screenSize: 6.7,
        hasNFC: true,
      },
      {
        model: 'Mi 11 Ultra',
        brand: 'Xiaomi',
        yearOfManufacture: '2021-03-29',
        ramSize: 12,
        processor: 'Snapdragon 888',
        screenSize: 6.81,
        hasNFC: true,
      },
      {
        model: 'Oppo Find X3 Pro',
        brand: 'Oppo',
        yearOfManufacture: '2021-03-19',
        ramSize: 12,
        processor: 'Snapdragon 888',
        screenSize: 6.7,
        hasNFC: true,
      },
      {
        model: 'Huawei P50 Pro',
        brand: 'Huawei',
        yearOfManufacture: '2021-07-29',
        ramSize: 8,
        processor: 'Kirin 9000',
        screenSize: 6.6,
      },
      {
        model: 'Vivo X60 Pro+',
        brand: 'Vivo',
        yearOfManufacture: '2021-01-21',
        ramSize: 12,
        processor: 'Snapdragon 888',
        screenSize: 6.56,
        hasNFC: true,
      },
      {
        model: 'Realme GT',
        brand: 'Realme',
        yearOfManufacture: '2021-03-04',
        ramSize: 12,
        processor: 'Snapdragon 888',
        screenSize: 6.43,
        hasNFC: false,
      },
    ];

    const phones2024YearOfManufacture = [
      {
        model: 'Galaxy S25',
        brand: 'Samsung',
        yearOfManufacture: '2024-03-15',
        ramSize: 16,
        processor: 'Exynos 2200',
        screenSize: 6.8,
      },
      {
        model: 'iPhone 16',
        brand: 'Apple',
        yearOfManufacture: '2024-09-12',
        ramSize: 8,
        processor: 'A18 Bionic',
        screenSize: 6.7,
        hasNFC: true,
      },
      {
        model: 'Pixel 9',
        brand: 'Google',
        yearOfManufacture: '2024-05-10',
        ramSize: 12,
        processor: 'Google Tensor G3',
        screenSize: 6.4,
        hasNFC: true,
      },
      {
        model: 'OnePlus 13',
        brand: 'OnePlus',
        yearOfManufacture: '2024-07-22',
        ramSize: 12,
        processor: 'Snapdragon 8 Gen 3',
        screenSize: 6.7,
      },
      {
        model: 'Xperia Z5',
        brand: 'Sony',
        yearOfManufacture: '2024-10-03',
        ramSize: 8,
        processor: 'Snapdragon 8 Gen 3',
        screenSize: 6.5,
        hasNFC: true,
      },
    ];

    //! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //! Додавання нових телефонів.
    // for (const phone of phones) {
    //   const createdPhone = await Phone.create(phone);
    //   console.log(createdPhone);
    // }

    //! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //! Отримання списку телефонів.
    // const foundPhones = await Phone.findAll({ raw: true });
    // console.log(foundPhones);

    //! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //! Отримання списку телефонів (* 3-я сторінка при перегляді по 4 телефони на сторінці, упорядкованих за роком виробництва).
    // const foundPhones = await Phone.findAll({
    //   order: ['yearOfManufacture'],
    //   limit: 4,
    //   offset: 8,
    //   raw: true,
    // });
    // console.log(foundPhones);

    //! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //! Oтримання списку телефонів поточного року видання.
    // for (const phone of phones2024YearOfManufacture) {
    //   const createdPhoneIn2024 = await Phone.create(phone);
    //   console.log(createdPhoneIn2024);
    // }

    // 1
    // const phones2024OfManufacture = await Phone.findAll({
    //   where: sequelize.literal(
    //     'EXTRACT(YEAR FROM "yearOfManufacture") = EXTRACT(YEAR FROM CURRENT_DATE)'
    //   ),
    //   raw: true,
    // });
    // console.log(phones2024OfManufacture);

    // 2
    // const phones2024OfManufacture = await Phone.findAll({
    //   where: {
    //     yearOfManufacture: {
    //       [Op.gte]: `${new Date().getFullYear()}-01-01`,
    //       [Op.lte]: `${new Date().getFullYear()}-12-31`,
    //     },
    //   },
    //   raw: true,
    // });
    // console.log(phones2024OfManufacture);

    //! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //! Oтримання списку телефонів старше 2022 року випуску.
    // const phones2023AndNew = await Phone.findAll({
    //   where: {
    //     yearOfManufacture: {
    //       [Op.gte]: '2023-01-01',
    //     },
    //   },
    //   raw: true,
    // });
    // console.log(phones2023AndNew);

    //! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //! Oновлення: змінити розмір оперативної пам'яті телефону з id: 1.
    // const updatedPhoneId1 = await Phone.update(
    //   { ramSize: 8 },
    //   {
    //     where: { id: 1 },
    //     returning: true,
    //     raw: true,
    //   }
    // );
    // console.log(updatedPhoneId1);

    //! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //! Oновлення: додати нфс всім телефонам 2024 року випуску.
    // const phone2024UpdateNFC = await Phone.update(
    //   { hasNFC: true },
    //   {
    //     where: {
    //       [Op.and]: [
    //         { hasNFC: false },
    //         sequelize.literal('EXTRACT(YEAR FROM "yearOfManufacture") = 2024'),
    //       ],
    //     },
    //     returning: true,
    //     raw: true,
    //   }
    // );
    // console.log(phone2024UpdateNFC);

    //! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //! Bидалення телефону з id: 2.
    // const deletePhoneId2 = await Phone.destroy({ where: { id: 2 } });
    // console.log(deletePhoneId2);

    //! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //! Bидалення телефонів 2021 року випуску.
    // const deletePhones2021Year = await Phone.destroy({
    //   where: sequelize.literal('EXTRACT(YEAR FROM "yearOfManufacture") = 2021'),
    // });
    // console.log(deletePhones2021Year);

    //! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //! Bивести середній розмір оперативної пам'яті телефонів.
    // const avgRAM = await Phone.findAll({
    //   attributes: [sequelize.fn('AVG', sequelize.col('ramSize'))],
    //   raw: true,
    // });
    // console.log(avgRAM);

    //! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //! Bивести кількість телефонів кожної марки.
    // const countPhoneByBrand = await Phone.findAll({
    //   attributes: ['brand', sequelize.fn('COUNT', sequelize.col('brand'))],
    //   group: 'brand',
    //   raw: true,
    // });
    // console.log(countPhoneByBrand);

    //! -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //! Bивести бренди, у телефонів яких максимальна діагональ більше за 6.6
    const brandPhones = await Phone.findAll({
      attributes: ['brand'],
      where: {
        screenSize: {
          [Op.gt]: 6.6,
        },
      },
      group: 'brand',
      raw: true,
    });
    console.log(brandPhones);
  } catch (error) {
    console.log(error);
  }
})();
