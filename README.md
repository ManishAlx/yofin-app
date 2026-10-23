# Yofin ⚡ Personal & Business Finance Tracker

An ultra-modern FinTech personal & business financial health engine inspired by CRED and Jupiter. Built with React, Vite, Supabase, Chart.js, and Framer Motion.

---

## ✨ Features & Capabilities

### 1. 🛡️ Supabase Full-Stack Integration & Auth
- Connected via `@supabase/supabase-js` using credentials in `.env` (`VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`).
- Secure Email & Password Login / Registration modal.
- Includes a 1-click **"Quick Demo Guest Access"** for instant offline or test evaluation.
- Live **Supabase Connection Tester & Settings Modal** to view, configure, and test connectivity.
- Built-in **SQL Schema Generator & 1-Click Copy** modal with ready-to-run PostgreSQL tables (`transactions`, `subscriptions`, `user_settings`) and Row Level Security (RLS) policies.

### 2. 🔀 Mode Switcher: Salaried vs Business / Freelancer
- **Salaried Individual**: Focused on salary countdown, fixed rent & EMIs, grocery allocations, and daily discretionary allowances.
- **Business & Freelancer**: Focused on client retainer cashflows, contractor payouts, software/cloud OPEX, and cash runway.

### 3. 🔥 THE USP: Payday Survival & Daily Burn Engine
- Takes liquid balance, subtracts pending fixed commitments (Rent, EMIs, Utilities, Vendor dues), and calculates:
  $$\text{Effective Available Funds} = \text{Available Liquid Balance} - \text{Pending Fixed Commitments}$$
  $$\text{Safe Daily Spend Limit} = \frac{\text{Effective Available Funds}}{\text{Days Remaining to Payday}}$$
- **Dynamic Zones**:
  - 🟢 **Safe Zone**: Sustainable burn rate with comfortable buffer.
  - 🟡 **Amber Burn Warning**: Moderate burn; alerts user to freeze non-essential orders.
  - 🔴 **Code Red Crunch**: High risk of running dry before salary day.
- **Interactive "What-If" Stress Test Simulator**:
  - Live slider to simulate planned impulse purchases (e.g. "What if I spend ₹5,000 today?").
  - Delay simulator (e.g. "What if my client/salary is delayed by 5 days?").
  - Instant recalculation of revised safe daily burn cap.
- **Payday Celebration**: Confetti animation triggered on payday!

### 4. 💸 Money Leaks & Unused Subscription Stopper
- Automatically flags zombie recurring subscriptions unused for 30+ days (e.g. gym memberships, unused SaaS seats, forgotten OTT platforms).
- Displays **Recoverable Annual Savings (₹/year)**.
- 1-click **"Kill / Cancel Subscription"** and reminder tracking.

### 5. 📊 Interactive Visual Analytics (Chart.js)
- **Category-wise Doughnut Chart**: Interactive distribution of expenses with neon accents.
- **Month-over-Month Bar Chart**: 5-month historical inflow vs outflow comparison.
- **Daily Burn vs Safe Cap**: Daily expenditure bars plotted against the dynamic daily safe benchmark line.

### 6. 📝 Complete Cashflow Ledger
- Real-time search, filter chips (All, Incomes, Expenses, Essentials Only, Wants/Optional).
- One-click **CSV Export** for accounting and record keeping.
- Indian Rupee (`₹`) formatting everywhere using standard `en-IN` locales.

---

## 🚀 Running the App

```bash
# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.
