import Mail from '../../lib/Mail';

class AwayMail {
  get key() {
    return 'AwayMail';
  }

  async handle({ data }) {
    const { mailData } = data;

    await Mail.sendMail({
      to: `fabricio.rocha@dhl.com`,
      subject: `Limite excedido de Afastamentos - Report Mensal de HSE`,
      template: 'away',
      context: {
        user: mailData.user,
        sector: mailData.sector,
        site: mailData.site,
        responsible: mailData.responsible,
        away: mailData.away,
        justify: mailData.justify,
      },
    });
  }
}

export default new AwayMail();
