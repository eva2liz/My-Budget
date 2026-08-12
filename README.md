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
  note, right from the **Paychecks** tab — recurring bills live on their
  own Recurring tab instead
- Log income with a date, amount, source (salary, freelance, etc.), and
  note — also right from the **Paychecks** tab, alongside expenses,
  since the two are so closely tied together
- Set a monthly budget per category and see progress bars (with an "over
  budget" warning) on the dashboard. The first 8 categories you create get
  their own chart color automatically; pick your own color for any
  category at any time with the color swatch on its form under
  **Categories & Budgets** — it shows up everywhere that category does
  (charts, the calendar, expense lists, and more)
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
  belongs to
- Paycheck summary on the dashboard — a quick-glance totals table for the
  same month: payday, income, what's assigned against it, and what's left
  over, per paycheck. Click a row to drill into exactly which bills make up
  that "assigned" total
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
- Filter/search your unassigned expense history by month or category
  (below the paycheck planner on the Paychecks tab)
- Light/dark theme toggle
- **Paid** and **cleared** checkboxes on every expense (and a **cleared**
  checkbox on income) so you can track what you've actually paid versus
  what's still pending, and what's posted at the bank versus not yet
  settled
- **Paychecks tab**: one place for income and one-time expenses/payments,
  and for matching them up. Add a paycheck and its **unassigned income**
  list sits right below that same card; add an expense and its
  **unassigned expenses** list sits right below that one — both update the
  instant you add something, no scrolling required. The moment you assign
  an expense to a paycheck (in the **paycheck planner** further down —
  e.g. rent comes out of the 7th's paycheck, groceries out of the 21st's),
  it moves up into that paycheck's card there (fully editable: Edit,
  Split, Unassign, Delete) and drops off the unassigned list, so nothing's
  ever shown twice. Income works the same way in reverse — a paycheck
  disappears from the unassigned-income list the moment at least one bill
  is assigned to it, no matter what month the planner is currently
  showing. Either way, everything is still fully there on the Calendar tab
  and in your exports
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
    (in the planner or in the list below it) to divide it into two linked
    entries — same date, category, and note — with the amount and paycheck
    you choose for each; they always add back up to the original total
  - A recurring bill can have a **default paycheck** set on its template
    (in the Recurring tab) so it auto-assigns itself every time it's due
    — just note that this ties it to one specific paycheck entry, so
    you'll want to re-pick it once that particular paycheck has passed;
    day-to-day, assigning bills from the Paychecks tab each pay period
    is the simplest approach. (If that default paycheck has already
    passed, the bill now logs as unassigned instead of silently sticking
    to the old paycheck — so it always shows up as assignable in the
    current month's dropdown rather than disappearing.)
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
  charges, and skips duplicates on re-import. Nothing is uploaded anywhere
  — the file is only read in your browser
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
   `sw.js`, and the `icons/` folder — to the repository (via the GitHub web
   UI's "Add file → Upload files", dragging in the folder, or with git):
   ```bash
   git init
   git add index.html manifest.json sw.js icons
   git commit -m "Add budget tracker"
   git branch -M main
   git remote add origin https://github.com/<your-username>/my-budget.git
   git push -u origin main
   ```
   All of these need to stay in the same folder, alongside each other, for
   the icons and offline support to work.
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
