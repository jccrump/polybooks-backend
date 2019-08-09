const mongoose = require("mongoose");
const expensePaymentSchema = require("./expensePaymentSchema");
const expenseApprovalStatusSchema = require("./expenseApprovalStatusModel");

let expenseSchema = mongoose.Schema(
  {
    project_id: String,
    vendor_id: String,
    status: String,
    type: String,
    date: Date,
    amount_due: Number,
    payments: [expensePaymentSchema],
    total_paid: Number,
    approval_status: String,
    filing_status: String,
    reconcile_status: String,
    notes: Array
  },
  { collection: "expenses" }
);

let expenseModel = mongoose.model("expenses", expenseSchema);

module.exports = expenseModel;
