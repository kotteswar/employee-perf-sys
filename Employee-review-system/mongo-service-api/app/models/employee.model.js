module.exports = mongoose => {
  const EmployeePerfReview = mongoose.model(
    "Employee Performance Review",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
    )
  );
  return EmployeePerfReview;
};