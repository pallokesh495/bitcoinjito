"use client";

import { useState } from "react";
import styles from "./SignUpModal.module.css";
import { X, Eye, EyeOff, ChevronDown } from "lucide-react";

const SignUpModal = ({ isOpen, onClose, onSwitchToSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    phone: "",
    referralCode: "",
    termsAgreed: false,
    marketingAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up with:", formData);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalLeft}>
          <div className={styles.casinoImageContainer}></div>
        </div>
        <div className={styles.modalRight}>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={20} />
          </button>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>Sign Up</h2>
            <form onSubmit={handleSubmit} className={styles.authForm}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Password</label>
                <div className={styles.passwordInputWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••"
                    value={formData.password}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Country</label>
                <div className={styles.selectWrapper}>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={styles.select}
                    required
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                  </select>
                  <ChevronDown className={styles.selectIcon} size={18} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Referral Code (Optional)</label>
                <input
                  type="text"
                  name="referralCode"
                  placeholder="Enter referral code"
                  value={formData.referralCode}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="termsAgreed"
                    checked={formData.termsAgreed}
                    onChange={handleChange}
                    className={styles.checkbox}
                    required
                  />
                  <span>I agree to the Terms of Service and Privacy Policy</span>
                </label>
              </div>
              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="marketingAgreed"
                    checked={formData.marketingAgreed}
                    onChange={handleChange}
                    className={styles.checkbox}
                  />
                  <span>I agree to receive marketing communications</span>
                </label>
              </div>
              <button type="submit" className={styles.submitButton}>
                Sign Up
              </button>
              <div className={styles.switchAuth}>
                Already have an account?{" "}
                <button
                  type="button"
                  className={styles.switchButton}
                  onClick={onSwitchToSignIn}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;