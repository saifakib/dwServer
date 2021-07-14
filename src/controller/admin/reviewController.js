
const { Review } = require('../../model')

/**
 * @ReviewControoler
 * @Route @/admin/review
 */

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({})
        res.status(200).json({reviews})
    } catch (e) {
        res.status(501).json({ errors: [{ msg: 'Server error!' }] });
    }
}

exports.editReview = async (req, res) => {
    try{

        const review = await Review.findByIdAndUpdate({ _id: req.body.id })
        review.display = !review.display
        await review.save()

        res.status(201).json({
            msg: "Review Updated"
        })
    }
    catch(err) {
        res.status(501).json({ errors: [{ msg: 'Server error!' }] });
    }
}

exports.removeReview = async (req, res) => {
    const _id = req.body.id;
    try {
        await Review.findByIdAndDelete({ _id })
        res.status(202).json({ msg: 'Review Removed' })
    } catch (e) {
        res.status(501).json({ errors: [{ msg: 'Server error!' }] });
    }
}