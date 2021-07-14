const { Contact } = require('../../model')

/**
 * @ContactController
 * @Route @admin/contact
 */


exports.getAllContact = async (req, res, next) => {
    try {
        const contacts = await Contact.find({})
        res.status(200).json({ contacts })
    }
    catch (err) {
        res.status(501).json({ errors: [{ msg: 'Server error!' }] });
    }
}

exports.removeContact = async (req, res, next) => {
    const _id = req.params.id
    try {
        await Contact.findByIdAndRemove({ _id })
        res.status(202).json({ msg: 'Contact Removed' })
    }
    catch (err) {
        res.status(501).json({ errors: [{ msg: 'Server error!' }] });
    }
}