import * as Yup from 'yup';
import Company from '../models/Company';

class CompanyController {
  //  METHOD TO CREATE A NEW USER
  async store(req, res) {
    const { name, email, phone, website } = req.body;

    const companyExists = await Company.findOne({
      email,
    });

    if (companyExists) {
      return res.status(400).json({
        error: 'Company Already exists',
      });
    }

    try {
      const data = await Company.create({
        name,
        email,
        phone,
        website,
        user_id: req.userId,
      });

      await data.populate('user').execPopulate();
      return res.status(200).json(data);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async show(req, res) {
    const { companyId } = req.params;

    try {
      if (companyId) {
        const data = await Company.findById(companyId).populate(
          'user_id',
          'name email phone isProvider'
        );
        return res.status(200).json(data);
      }
      const data = await Company.find().populate(
        'user_id',
        'name email phone isProvider'
      );

      return res.status(200).json(data);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      phone: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validation Failed. Please, check the fields and try again.',
      });
    }

    const { name, email, phone } = req.body;

    // FIND THE USER TO MAKE THE ID AVAILABLE TO UPDATE
    const company = await Company.findOne({
      where: {
        email,
      },
    });

    // CHECK IF USER IS CHANGING THE E-MAIL FOR ONE THAT ALREADY EXISTS
    if (email !== company.email) {
      const companyExists = await Company.findOne({
        where: {
          email,
        },
      });

      if (companyExists) {
        return res.status(400).json({
          error: 'A company with that same email already exists',
        });
      }
    }

    const { employee } = await company.update(req.body);

    return res.json({
      name,
      email,
      phone,
      employee,
    });
  }
}

export default new CompanyController();
