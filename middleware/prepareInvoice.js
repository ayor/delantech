const PDFDOC = require('easyinvoice');

const createInvoice = async (order, customer) => {
  try {
    if (!order) {
      const err = new Error('there are no orders');
      err.statusCode = 404;
      throw err;
    }

    const invoiceName = 'invoice_' + customer.email + '_' + order.id + '.pdf';

    const products = order.items.map((item) => {
      return {
        quantity: item.qty.toString(),
        description: item.name,
        price: parseFloat(item.price),
        tax: 0,
      };
    });

    let data = {
      //"documentTitle": "RECEIPT", //Defaults to INVOICE
      currency: 'NGN',
      taxNotation: 'vat', //or gst
      marginTop: 25,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 25,
      logo: 'https://delantech.vercel.app/img/sfav.png', //or base64
      //"logoExtension": "png", //only when logo is base64
      sender: {
        company: 'Delantech',
        address: 'TGS Plaza, Bogije Road, Lekki Express Way, Lekki Lagos.',
        zip: '100264',
        city: 'Lagos',
        country: 'Nigeria',
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
      },
      client: {
        company: customer.email,
        address: customer.address,
        zip: '',
        city: customer.city,
        country: customer.country,
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
      },
      invoiceNumber: order.id,
      invoiceDate: new Date().toLocaleDateString(),
      products: products,
      // "bottomNotice": "This is invoice excludes a " + invoiceOrder.shippingMode + " shipping fee of $" + invoiceOrder.shippingFee
    };
    const result = await PDFDOC.createInvoice(data);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = createInvoice;
