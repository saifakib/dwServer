const { Service } = require('../../model')

/**
 * @ServiceControoler
 * @Route @/admin/service
 */

exports.getAllService = async (req, res) => {
    try {
        const services = await Service.find({})
        res.status(200).json({ services })
    } catch (e) {
        res.status(500).json({ errors: [{ msg: 'Server error!' }] });
    }
}


exports.createService = async (req, res) => {
    try {
        console.log(req.body)
        const { name, img, price, description } = req.body;

        let service = new Service({
            name,
            img,
            price,
            description
        })
        let response = await service.save();
        if (res) {
            res.status(201).json({ msg: "Service created", service: response })
        }
    } catch (err) {
        res.status(505).json({ errors: [{ msg: 'Server error!' }] });
    }
}

exports.editService = async (req, res) => {
    const { id, name, img, price, description } = req.body;

    try {
        const service = await Service.findOneAndUpdate(
            { _id: id },
            { $set: { name, img, price, description } }
        )

        const updateService = await Service.findById(service._id)

        res.status(200).json({ msg: 'Service Updated', service: updateService })

    } catch (e) {
        res.status(500).json({ errors: [{ msg: 'Server error!' }] });
    }
}


exports.removeService = async (req, res) => {
    const _id = req.params.id;
    try {
        await Service.findByIdAndDelete({ _id })
        res.status(202).json({ msg: 'Service Removed' })
    } catch (e) {
        res.status(500).json({ errors: [{ msg: 'Server error!' }] });
    }
}


