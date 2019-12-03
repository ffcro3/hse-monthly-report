import Mail from '../../lib/Mail';

class CATMail {
  get key() {
    return 'CATMail';
  }

  async handle({ data }) {
    const { mailData } = data;

    await Mail.sendMail({
      to: `fabricio.rocha@dhl.com`,
      subject: `Limite excedido de CAT - Report Mensal de HSE`,
      template: 'cat',
      context: {
        user: mailData.user,
        sector: mailData.sector,
        site: mailData.site,
        responsible: mailData.responsible,
        cat: mailData.cat,
        justify: mailData.justify,
      },
    });
  }
}

export default new CATMail();
