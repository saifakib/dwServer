const { Review } = require('../../model')

exports.postReview = async (req, res) => {
    const { name, designation, description } = req.body
    const user_id = req.user.userid
    try {
        let review = new Review({
            user_id,
            name,
            designation,
            description,
        })
        let response = await review.save();
        if (res) {
            res.status(201).json({ msg: "Review submitted", review: response })
        }
    } catch (e) {
        res.status(500).json({ errors: [{ msg: 'Server error!' }] });
    }
}