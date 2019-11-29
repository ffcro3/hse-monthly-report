import Mail from '../../lib/Mail';

class FinishMail {
  get key() {
    return 'FinishMail';
  }

  async handle({ data }) {
    const { captationCreate } = data;

    await Mail.sendMail({
      to: `alugueljundiai@gmail.com`,
      subject: `Nova captação recebida!`,
      template: 'finish',
      context: {
        type: captationCreate.type,
        finality: captationCreate.finality,
        city: captationCreate.city,
        neighborhood: captationCreate.neighborhood,
        name: captationCreate.name,
        email: captationCreate.email,
        phone: captationCreate.phone,
      },
    });
  }
}

export default new FinishMail();
