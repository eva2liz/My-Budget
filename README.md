# My Budget

A simple, single-file personal budget tracker. No sign-up, no server, no
build step — just one `index.html` file that runs entirely in your browser.
Your data is saved locally on whatever device/browser you open it in
(using `localStorage`), so it works fully offline.

## Features

- Log one-time expenses and payments with a date, amount, category, and
  note, right from the **Paychecks** tab — recurring bills live on their
  own Recurring tab instead
- Log income with a date, amount, source (salary, freelance, etc.), and
  note — also right from the **Paychecks** tab, alongside expenses,
  since the two are so closely tied together
- Set a monthly budget per category and see progress bars (with an "over
  budget" warning) on the dashboard
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
  their category color) and every income entry — recurring payday or
  one-time — highlighted across the whole day in a color you choose
  yourself, with a legend and month navigation — click any bill or income
  entry to open and edit it
- Filter/search your unassigned expense history by month or category
  (below the paycheck planner on the Paychecks tab)
- Light/dark theme toggle
- **Paid** and **cleared** checkboxes on every expense (and a **cleared**
  checkbox on income) so you can track what you've actually paid versus
  what's still pending, and what's posted at the bank versus not yet
  settled
- **Paychecks tab**: one place for income and one-time expenses/payments,
  and for matching them up — add a paycheck or an expense at the top, see
  it folded into the **paycheck planner** below (e.g. rent comes out of
  the 7th's paycheck, groceries out of the 21st's), check bills off as
  you pay them, and see exactly what's left over to spend from each
  paycheck. The expense list further down shows only what's still
  **unassigned** — the moment you assign one to a paycheck it moves up
  into that paycheck's card (fully editable there: Edit, Split, Unassign,
  Delete) and drops off the list below, so nothing is ever shown twice.
  Income works the same way in reverse: whichever month the planner is
  showing appears as full paycheck cards (with their own Cleared, Edit, and
  Delete right on the card) — the **Other income** list further down only
  shows paychecks logged ahead of time for months *after* whichever one's
  open above. The moment you move the planner on to a new month, whatever
  came before drops off that list for good instead of resurfacing every
  time you check a later month — it's still there in full on the Calendar
  tab and in your exports
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
into a browser tab). That's it — nothing to install.

**Heads up:** because data is stored in the browser, it's tied to that one
browser on that one device. Use **Settings → Export full backup (JSON)**
regularly, especially before clearing your browser data, and use
**Import backup** to restore it (or move it to another device/browser).

## Hosting it on GitHub Pages (optional)

If you'd like a permanent link you can open from your phone or any
computer (data still stays local to whichever browser you use it in — this
doesn't add cloud sync), you can host it for free with GitHub Pages:

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

Since everything runs client-side, GitHub Pages (which only serves static
files) is all you need — no server or database required.

## Installing it as a mobile app

Once it's hosted on GitHub Pages (this only works over `https://`, not when
opening the file locally), you can add it to your phone's home screen so it
opens full-screen with its own icon, like a real app:

- **iPhone/iPad (Safari):** open your GitHub Pages link, tap the **Share**
  icon, then **Add to Home Screen**.
- **Android (Chrome):** open the link, tap the **⋮** menu, then **Add to
  Home Screen** or **Install app** (Chrome sometimes offers this
  automatically via a small install banner).

It also works fully offline after the first visit — since all your data is
already local to the browser, the app itself has nothing to fetch from the
network once it's loaded, so a service worker (`sw.js`) caches the handful
of small files it needs (this page, the icons) so it opens instantly with no
signal at all. Whenever you're back online, it quietly checks for anything
newer you've pushed to GitHub and updates in the background.

## Notes on the data model

Everything lives in one `localStorage` key as JSON: your categories,
expenses, recurring templates, and settings. There's no tracking, no
analytics, and nothing ever leaves your browser except when you explicitly
export a file.

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
