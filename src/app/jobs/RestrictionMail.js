import Mail from '../../lib/Mail';

class RestrictionMail {
  get key() {
    return 'RestrictionMail';
  }

  async handle({ data }) {
    const { mailData } = data;

    await Mail.sendMail({
      to: `fabricio.rocha@dhl.com`,
      subject: `Limite excedido de Restrições - Report Mensal de HSE`,
      template: 'restriction',
      context: {
        user: mailData.user,
        sector: mailData.sector,
        site: mailData.site,
        responsible: mailData.responsible,
        restrictions: mailData.restrictions,
        justify: mailData.justify,
      },
    });
  }
}

export default new RestrictionMail();
