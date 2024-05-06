module.exports = {
  index: (req, res) => {
    try {
      res.render("index", { title: "Express" });
    } catch (error) {
      console.log(error);
    }
  },
};
