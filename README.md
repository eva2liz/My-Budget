# My Budget

A simple, single-file personal budget tracker — just one `index.html` file,
no separate server or build step to run it. Sign in with an email and
password (created right in the app) and your data syncs automatically to
your own private account, so it's there whether you open the app on your
phone, a laptop, or any other device. It also keeps a local copy on each
device so it keeps working offline — see **Notes on the data model** below
for exactly how that works.

## Features

- Log one-time expenses and payments with a date, amount, category, and
  note, right from the **Check Register** tab — recurring bills live on
  their own Recurring tab instead
- Log income with a date, amount, source (salary, freelance, etc.), and
  note — also right from the **Check Register** tab, alongside expenses,
  since the two are so closely tied together
- Set a monthly budget per category and see progress bars (with an "over
  budget" warning) on the dashboard. The first 8 categories you create get
  their own chart color automatically; pick your own color for any
  category at any time — it shows up everywhere that category does
  (charts, the calendar, expense lists, and more). Drag the handle on any
  row of the dashboard's "Spending by category" list to reorder your
  categories — the new order applies everywhere (this list, Budget vs.
  actual, Categories & Budgets, and every category dropdown)
- **Categories & Budgets table is directly editable** — change a
  category's color, name, or monthly budget right in the table (color
  saves the moment you pick one; name and budget save when you click
  away or press Enter), no need to open the form and scroll up. The
  **Edit** button is still there for marking a category as a loan or
  credit card and setting its balance
- Recurring expenses (rent, subscriptions, etc.) that auto-log once a month
- Recurring income can be **monthly** (same day every month, like a fixed
  salary date) or **every 2 weeks** (like a biweekly paycheck that lands
  on a different date each cycle — e.g. every other Friday) — for
  biweekly, just give it any date you know it landed on and future/past
  occurrences are calculated from there
- Dashboard with income, spending, and net totals for the month, plus a
  6-month income-vs-expenses trend chart
- "Spending by category" chart — each category's bar fills toward its own
  budget (full means right at budget, red means over); categories with no
  budget set are just compared to each other, so one big category no longer
  makes every other bar look emptier than it really is
- Budget vs. actual table on the dashboard — pick any month and see
  budgeted vs. actual vs. remaining vs. % used, per category and in total.
  Click any row to open a breakdown of every transaction that makes up that
  total, with date, note, amount, and which paycheck (or "Unassigned") it
  belongs to. Click any transaction's note in that breakdown to jump
  straight to editing it
- Paycheck summary on the dashboard — a quick-glance totals table for the
  same month: payday, income, what's assigned against it, and what's left
  over, per paycheck. Click a row to drill into exactly which bills make up
  that "assigned" total, and click any bill's note there to jump straight
  to editing it
- Savings goals — set aside money for something specific (an emergency
  fund, a trip, a car), separate from bills and budgets. Give it a name,
  target amount, and starting balance; log **Add money** each time you set
  more aside (or a negative amount to pull some back out); the progress bar
  fills as you go and turns green with a "goal reached!" note once you hit
  the target
- **Search** (magnifying-glass icon, top right) — find any expense or
  income entry by note, source, category, amount, or date, no matter what
  month it's in or whether it's been assigned to a paycheck yet. Click a
  result to jump straight to editing it
- Calendar view showing when recurring bills are due (as labeled tags in
  their category color, with a red checkmark once that occurrence is
  marked paid) and every income entry — recurring payday or one-time —
  highlighted across the whole day in a color you choose yourself, with a
  legend and month navigation — click any bill or income entry to open and
  edit it
- Filter the Check Register by a custom date range (From/To) or category to
  narrow what's shown
- Light/dark theme toggle
- **Paid** and **cleared** checkboxes on every expense (and a **cleared**
  checkbox on income) so you can track what you've actually paid versus
  what's still pending, and what's posted at the bank versus not yet
  settled
- **Click any column title in the Check Register to sort by it** — click
  **Payee** to group every transaction with the same payee together
  alphabetically (click again to reverse), click the **✓** column to bring
  cleared items to the top, or **P** to bring paid items to the top. Click
  **Date** to go back to plain chronological order. The running balance
  never recalculates when you sort — it's always the true running total in
  date order, just displayed in whatever order you're currently sorted by
- **Check Register tab**: a full-width ledger styled like a desktop
  checkbook register (QuickBooks-style) — two lines per transaction, a
  **balance column** that runs down the page so you can reconcile against
  your bank statement, and a sticky header. It's the whole browser window
  wide on purpose, and only the register itself scrolls (top to bottom) —
  the page never scrolls sideways, no matter how many transactions you have
  - **No separate "Add income"/"Add expense" cards** — type a new
    transaction straight into the blank line at the bottom: date, payee,
    an amount in either **Payment** or **Deposit**, and an **account**
    (category). Everyday spending doesn't need a paycheck picked for it —
    see **Paycheck assignment only applies to recurring bills** below
  - Every existing transaction's top line shows date, payee, payment or
    deposit, a **cleared** checkbox, a **paid** checkbox (expenses only —
    income doesn't have a "paid" state), and balance; the muted line right
    underneath holds its account and Delete, plus, only for bills that
    came from the Recurring tab, its paycheck and a Split button — change
    any of those right there, no extra clicks
  - Click the **date** to correct it inline, or click the **payee** to open
    the full edit form (amount, paid status, and everything else) in a
    panel that appears above the register and tucks itself away again once
    you're done
  - A From/To date-range filter (plus a category filter), right at the top
    next to the "Check register" heading, narrows what's shown without
    touching the running balance, which is always based on your full history
  - Bank transactions you import (see CSV import below) land here
    automatically, flagged with a red **✗** and a red-outlined field until
    you assign a real account to them — once you do, the flag clears itself
  - A **Beginning balance** row is always pinned at the very top, in
    italics, not linked to any category or paycheck — it's just an amount
    (and, if you want, a date) you set once to match whatever your bank
    account actually held before you started tracking here. Click its date
    or its balance to edit either one directly; every balance below it
    shifts to match, so the running balance is a true reflection of your
    account instead of starting from zero
- **Paycheck assignment only applies to recurring bills.** The whole point
  of assigning bills to paychecks is to know what not to spend so you're
  not left short — that's only meaningful for the committed, recurring
  payments (rent, utilities, subscriptions, debt), not for everyday
  spending like food, gas, or shopping that's already tracked by category
  in the Check Register. So a **Paycheck** field (and the **Split** button)
  only ever shows up on a bill that came from the **Recurring** tab —
  either auto-logged, logged early with **Log now**, or assigned straight
  from the **Paychecks** tab. Anything you type directly into the Check
  Register's blank row is everyday spending by definition and never gets
  a Paycheck field at all — one less thing to fill in, and nothing to be
  flagged for skipping
- **Only recurring income counts as a "paycheck" too.** The same logic
  applies on the income side — a "paycheck" is something you plan bills
  against ahead of time, which only makes sense for income that actually
  recurs (a salary or biweekly payday from the **Recurring** tab). A
  one-off deposit typed into the Check Register (a gift, a tax refund,
  a single freelance payment) still counts fully toward your income
  totals and running balance, but it never shows up as a block in the
  **Paychecks** tab or the Dashboard's Paycheck summary, and it's never
  offered as a paycheck to assign a bill to
- **Paychecks tab**: the **paycheck planner** — for each paycheck, assign
  the recurring bills it needs to cover (right from the Check Register, or
  from the dropdown here), check them off as you pay them, and see what's
  left over to spend
  - Recurring bills that haven't come due yet still show up here as
    "pending" options you can assign ahead of time, with a **Log now**
    button to record them early if you want them off your plate
  - Recurring paychecks work the same way — an upcoming payday (monthly or
    biweekly) previews as its own card before it's actually logged, with
    **Log now** or **Log &amp; edit amount** (for when a paycheck comes in
    a bit different than usual) to record it early
  - Paying more or less than usual on a bill this time (extra toward a
    loan, a variable utility bill, etc.)? Click **Edit** on any assigned
    bill to change just that occurrence's amount — or **Log &amp; edit
    amount** on one that hasn't come due yet, to log and adjust it in one
    step. Either way, the recurring template's own default amount for
    future months is untouched
  - The planner looks at both the current month and next month, so an
    end-of-month paycheck (e.g. the 31st) can be assigned against next
    month's bills (e.g. September's rent) before that month even starts
  - Paying one bill from two different paychecks (e.g. half of rent from
    the 7th's check, half from the 21st's)? Use its **Split** button
    (in the planner or the Check Register) to divide it into two linked
    entries — same date, category, and note — with the amount and paycheck
    you choose for each; they always add back up to the original total
  - A recurring bill can have a **default paycheck** set on its template
    (in the Recurring tab) so it auto-assigns itself every time it's due
    — just note that this ties it to one specific paycheck entry, so
    you'll want to re-pick it once that particular paycheck has passed;
    day-to-day, assigning bills from the Check Register or planner each
    pay period is the simplest approach. (If that default paycheck has
    already passed, the bill now logs as unassigned instead of silently
    sticking to the old paycheck — so it always shows up as assignable in
    the current month's dropdown rather than disappearing.)
- **Loan &amp; credit card balances**: mark any category as a loan or credit
  card (under Categories &amp; Budgets), enter what you currently owe and
  as of what date, then log expenses in that category as a **charge**
  (adds to the balance) or a **payment** (reduces it). A new **Balances**
  tab shows the running current balance for each one, plus a total across
  all of them
- **Import bank transactions from a CSV** — most banks, including Bank of
  America, let you download recent transactions as a CSV from their
  website; upload it under Settings and the app maps the columns
  automatically (with manual override if needed), splits deposits from
  charges, and skips duplicates on re-import. Imported expenses land in the
  Check Register flagged for review until you assign a real category to
  each one. Nothing is uploaded anywhere — the file is only read in your
  browser
- Export everything (income + expenses) to CSV (opens directly in
  Excel/Google Sheets) or export a full JSON backup you can re-import later
  or on another device
- Polished for mobile — tables scroll horizontally instead of squishing,
  and forms, cards, and buttons tighten up and stack on narrow phone screens

## Using it right now

Just open `index.html` in any browser (double-click the file, or drag it
into a browser tab), then sign up with an email and password the first
time. That's it — nothing to install, and no separate account-creation
website involved (see **Notes on the data model** below for where the
account itself actually lives).

**Heads up:** even though your data syncs to your account, it's still a
good habit to use **Settings → Export full backup (JSON)** occasionally —
it's a real safety net if you ever need to recover an accidental "Erase
all data," want an offline copy, or want to move data into a *different*
account.

## Hosting it on GitHub Pages (optional)

If you'd like a permanent link you can open from your phone or any
computer, you can host it for free with GitHub Pages. This is just about
giving the app a stable web address to open — your account and data sync
the same way (via Firebase, see below) whether you open it from a GitHub
Pages link, straight off your own computer, or anywhere else:

1. Create a new repository on GitHub (e.g. `my-budget`).
2. Upload the whole `budget-app` folder as-is — `index.html`, `manifest.json`,
   `sw.js`, `logo-piggy.png`, and the icon files (`icon-192.png`,
   `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`) — to the
   repository (via the GitHub web UI's "Add file → Upload files", dragging
   in the folder, or with git):
   ```bash
   git init
   git add index.html manifest.json sw.js logo-piggy.png icon-192.png icon-512.png icon-maskable-512.png apple-touch-icon.png
   git commit -m "Add budget tracker"
   git branch -M main
   git remote add origin https://github.com/<your-username>/my-budget.git
   git push -u origin main
   ```
   All of these need to stay in the same folder, alongside `index.html`, for
   the header logo, icons, and offline support to all work.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   pick the **main** branch and **/ (root)** folder, then save.
5. GitHub will give you a URL like
   `https://<your-username>.github.io/my-budget/` within a minute or two —
   bookmark it.

The app's code itself is entirely static files, so GitHub Pages (which only
serves static files) is all you need to host it — no server of your own
required. (Firebase, mentioned below, is what handles your account and
data — GitHub Pages just serves the app that talks to it.)

## Installing it as a mobile app

Once it's hosted on GitHub Pages (this only works over `https://`, not when
opening the file locally), you can add it to your phone's home screen so it
opens full-screen with its own icon, like a real app:

- **iPhone/iPad (Safari):** open your GitHub Pages link, tap the **Share**
  icon, then **Add to Home Screen**.
- **Android (Chrome):** open the link, tap the **⋮** menu, then **Add to
  Home Screen** or **Install app** (Chrome sometimes offers this
  automatically via a small install banner).

It also works fully offline after the first visit — a service worker
(`sw.js`) caches the handful of small files the app itself needs (this
page, the icons), and your data has its own local cache (see below), so
the whole thing opens instantly and stays usable with no signal at all.
Whenever you're back online, it quietly checks for anything newer you've
pushed to GitHub and updates in the background, and syncs up any changes
you made offline.

## Notes on the data model

Your data lives in two places at once, kept in sync automatically:

- **Your account, in the cloud.** Signing in creates an account through
  [Firebase](https://console.firebase.google.com) (Google's app-backend
  service) — specifically Firebase Authentication (for the email/password
  login itself) and Firestore (a database) for the data. Everything you
  enter — categories, expenses, income, recurring templates, savings
  goals, settings — is saved as one document tied to your account, a
  couple seconds after each change. That's what makes it show up on every
  device you sign into.
- **A local cache, in the browser.** The app also keeps a copy in
  `localStorage` on whatever device you're using, so it keeps working
  (and stays fast) even with no signal — anything you do offline quietly
  syncs up to your account the next time you're back online.

There's no tracking, no analytics, and no ad network involved. Nobody but
you can see your data — it's private to your account, governed by the
Firestore security rules on the project, not by the data being hidden
somewhere. (If you're the one who originally set up the Firebase project,
you could technically view the raw data for your own account by logging
into the Firebase console — but there's no way for anyone else to.)

## About bank account linking

This app can't connect directly to your bank (Bank of America or
otherwise) — that requires a service like Plaid, which needs a private
backend server to hold API credentials securely, since a static page like
this one can never hold a secret safely. The CSV import above is the
practical middle ground: no credentials, no backend, still works entirely
in your browser, and covers the "get my transactions in without typing
them" need for most people. If you ever want to pursue real bank-linking,
it's a legitimate multi-session project (Plaid developer account + a
hosted backend) — ask and we can scope it out.
