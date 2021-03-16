// module.exports = mongoose => {
//   const EmployeePerfReview = mongoose.model(
//     "Employee Performance Review",
//     mongoose.Schema(
//       {
//         title: String,
//         description: String,
//         published: Boolean
//       },
//       { timestamps: true }
//     )
//   );
//   return EmployeePerfReview;
// };

module.exports = mongoose => {
  const EmployeePerfReview = mongoose.model(
    "Employee Performance Review",
    mongoose.Schema(
      {
        employeeId: String,
        employeeName: String,
        employeeDepartment: String,
        performanceReviewStatus: Boolean,
        performanceFeedback: String,
        username: String,
        email: String,
        password: String,
        employeeReviewer: String,
        roles: String
      },
      { timestamps: true }
    )
  );
  return EmployeePerfReview;
};