import Mail from '../../lib/Mail';

class ErgoMail {
  get key() {
    return 'ErgoMail';
  }

  async handle({ data }) {
    const { mailData } = data;

    await Mail.sendMail({
      to: `fabricio.rocha@dhl.com`,
      subject: `Limite excedido de ações ERGO17 - Report Mensal de HSE`,
      template: 'ergo',
      context: {
        user: mailData.user,
        sector: mailData.sector,
        site: mailData.site,
        responsible: mailData.responsible,
        ergo: mailData.ergo,
        justify: mailData.justify,
      },
    });
  }
}

export default new ErgoMail();
