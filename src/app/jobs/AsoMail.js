import Mail from '../../lib/Mail';

class AsoMail {
  get key() {
    return 'AsoMail';
  }

  async handle({ data }) {
    const { mailData } = data;

    await Mail.sendMail({
      to: `fabricio.rocha@dhl.com`,
      subject: `Limite excedido de ASOS - Report Mensal de HSE`,
      template: 'aso',
      context: {
        user: mailData.user,
        sector: mailData.sector,
        site: mailData.site,
        responsible: mailData.responsible,
        aso: mailData.aso,
        justify: mailData.justify,
      },
    });
  }
}

export default new AsoMail();
