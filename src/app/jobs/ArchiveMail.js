import Mail from '../../lib/Mail';

class ArchiveMail {
  get key() {
    return 'ArchiveMail';
  }

  async handle({ data }) {
    const { mailData } = data;

    await Mail.sendMail({
      to: `fabricio.rocha@dhl.com`,
      subject: `Limite excedido de Arquivamentos - Report Mensal de HSE`,
      template: 'archive',
      context: {
        user: mailData.user,
        sector: mailData.sector,
        site: mailData.site,
        responsible: mailData.responsible,
        archive: mailData.archive,
        justify: mailData.justify,
      },
    });
  }
}

export default new ArchiveMail();
