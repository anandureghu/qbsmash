"use client";
import React, { useState } from "react";
import "./AddRule.scss";
import { Form, Formik } from "formik";
import axios from "axios";
import { addRulesValidationScema } from "@/validations/rules/addRules.validation";

/**
 * error message showing component for a field
 */
const AddRuleFiledValidationError = ({ field, touched, errors }) => {
  return touched[field] && errors[field] ? (
    <div className="rule__addpopup-error">{errors[field]}</div>
  ) : null;
};

const AddRule = ({ open, close }) => {
  const handleAddRule = (values, resetForm) => {
    axios
      .post("/api/rules", values)
      .then(({ data, status }) => {
        if (status === 201) {
          close();
          resetForm();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="rule__addpopup"
      style={{ display: open ? "flex" : "none" }}
      onClick={close}
    >
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        validationSchema={addRulesValidationScema}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          resetForm,
          touched,
          errors,
        }) => (
          <Form>
            <div
              className="rule__addpopup-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h1>Add Rule</h1>
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                value={values.title}
              />
              <AddRuleFiledValidationError
                field={"title"}
                errors={errors}
                touched={touched}
              />
              <textarea
                id=""
                cols="30"
                rows="10"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                value={values.description}
              ></textarea>
              <AddRuleFiledValidationError
                field={"description"}
                errors={errors}
                touched={touched}
              />
              <button
                className="rule__addpopup-submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddRule(values, resetForm);
                }}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddRule;
