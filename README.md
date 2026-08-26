# My Budget

A simple, single-file personal budget tracker — just one `index.html` file,
no separate server or build step to run it. Sign in with an email and
password (created right in the app) and your data syncs automatically to
your own private account, so it's there whether you open the app on your
phone, a laptop, or any other device. It also keeps a local copy on each
device so it keeps working offline — see **Notes on the data model** below
for exactly how that works.

## Features

- **Sidebar navigation** — the tabs live in a left-hand sidebar on wider
  screens; on phones it tucks away behind a menu (☰) button in the header
  and slides out as a drawer, so the app has room to breathe no matter the
  screen size
- Log one-time expenses and payments with a date, amount, category, and
  note, right from the **Check Register** tab — recurring bills live on
  their own Recurring tab instead
- Log income with a date, amount, source (salary, freelance, etc.), and
  note — also right from the **Check Register** tab, alongside expenses,
  since the two are so closely tied together
- Set a monthly budget per category and see progress bars (with an "over
  budget" warning) on the **Budget vs. Actual** tab. The first 8 categories
  you create get their own chart color automatically; pick your own color
  for any category at any time — it shows up everywhere that category does
  (charts, the calendar, expense lists, and more). **Reorder categories
  right in the Categories & Budgets table** — drag the handle on the left
  of any row, and the new order applies everywhere (the Dashboard, Budget
  vs. actual, and every category dropdown)
- **Categories & Budgets table is directly editable** — change a
  category's color, name, monthly budget, or default bank account right
  in the table (color saves the moment you pick one; the rest save when
  you click away or press Enter), no need to open the form and scroll up.
  Tracking a credit card's balance now lives on its own **CC Register**
  tab instead (see below) — categories here are just for what you spend
  on. This tab also has a **Bank accounts** list — a separate concept
  from category, for tagging which real bank account a Check Register
  transaction moved through, with an optional default per category; see
  the Check Register section below for how that's used
- Recurring expenses (rent, subscriptions, storage units, pest control,
  etc.) can be **monthly** (same day every month), **every 2 weeks**, or
  **every 2 months** — for the every-2 options, just give it any date you
  know it landed on (past or future) and every other occurrence is
  calculated from there, same as biweekly income below. They auto-log the
  next time you open the app once their date arrives
  - **Editing a recurring template fixes the reminder itself, not just
    future months.** If this period's occurrence is already logged but
    still sitting open — not paid, not cleared — correcting the
    template's amount, category/card, or due day updates that open
    placeholder to match, instead of leaving the old amount showing until
    next month. Only fields you haven't already hand-adjusted on that
    occurrence get synced this way — if you already bumped this month's
    amount for a one-time reason, that override sticks. And a due-day
    change moves the still-open placeholder to the corrected date instead
    of leaving the old one in place and logging a second, duplicate entry
    alongside it. None of this touches an occurrence you've already paid
    or cleared — that's real money that already moved, so it's left
    exactly as it was
  - **Editing the DATE on an already-logged occurrence's own row — e.g. to
    reflect when it actually posted — doesn't cause a duplicate either.**
    Whichever expense is already linked to that bill for the month still
    counts as covering that month's occurrence no matter what exact day
    it's dated to now, so the next time you open the app it won't think
    that occurrence was never logged and auto-log a fresh one with the
    template's original date and amount right alongside it
- Recurring income can be **monthly** (same day every month, like a fixed
  salary date) or **every 2 weeks** (like a biweekly paycheck that lands
  on a different date each cycle — e.g. every other Friday) — for
  biweekly, just give it any date you know it landed on and future/past
  occurrences are calculated from there
- Dashboard with income, spending, and net totals for the month, plus three
  panels:
  - **Recent transactions** — the last 7 Check Register entries (expenses
    and income together) from the current month, as of today
  - **Due today & past due** — recurring bills (not everyday spending) due
    today, plus any earlier this month that are still sitting unpaid or
    uncleared (e.g. tithes or a mortgage payment that slipped by) — those
    are flagged in red as "Past due" so they don't get lost
  - **Upcoming payments** — recurring bills due later this month, whether
    already logged (but not yet paid or cleared) or not logged at all yet

  Click any recent transaction, due-today, or upcoming-payment item to jump
  straight to editing it

  If you type a recurring bill's payment straight into the Check Register
  or CC Register instead of using the auto-logged entry the Recurring tab
  created — a hand-typed "Diezmo" for the "Tithing 10%" bill, say — the app
  links the two automatically as long as the account (category, or
  card/type for a card payment) matches: the redundant auto-logged
  placeholder quietly disappears, and the row picks up a small "Linked to
  &lt;bill&gt;" tag so it's clear why the Dashboard now treats it as
  covered. There's an **Unlink** button right next to that tag if it ever
  guesses wrong. The one case this can't resolve on its own is when two or
  more recurring bills share the same account and are both still
  unresolved that month — genuinely ambiguous, so the transaction is left
  unlinked rather than guessing; jumping to that transaction from Search,
  the Dashboard, or a category breakdown still opens the full edit panel,
  which has its own manual **Recurring bill** field for exactly this rare
  case
- **This month's paychecks**, shown as a row of cards on the Dashboard —
  each card shows the payday, income, a progress bar of what's been
  assigned against it, and what's left over. Click a card to drill into
  exactly which bills make up its "assigned" total, and click any bill's
  note there to jump straight to editing it
- **Budget vs. Actual** has its own tab with its own month picker — pick any
  month and see budgeted vs. actual vs. remaining vs. % used, per category
  and in total. Click any row to open a breakdown of every transaction that
  makes up that total, with date, note, amount, and which paycheck (or
  "Unassigned") it belongs to. Click any transaction's note in that
  breakdown to jump straight to editing it. A **"Spending by category"**
  chart sits at the bottom of this same tab, sharing its month picker —
  each category's bar fills toward its own budget (full means right at
  budget, red means over); categories with no budget set are just compared
  to each other, so one big category no longer makes every other bar look
  emptier than it really is. This view is read-only — reorder categories
  from the Categories & Budgets table instead (see above)
- Savings goals — set aside money for something specific (an emergency
  fund, a trip, a car), separate from bills and budgets. Give it a name,
  target amount, and starting balance; log **Add money** each time you set
  more aside (or a negative amount to pull some back out); the progress bar
  fills as you go and turns green with a "goal reached!" note once you hit
  the target
  - **Link a goal to a category** and every Check Register or CC Register
    transaction filed under that category counts toward it automatically —
    categorize your monthly transfer as "Savings" and it folds right into
    the goal's total, no separate **Add money** click needed. **This
    happens with zero setup if you only have one savings goal** — the app
    auto-detects any category with "saving" in its name and links it for
    you (you'll see "linked to Savings (auto)" on the goal once it kicks
    in). With two or more goals it can't guess which one a "Savings"
    category belongs to, so each one needs its category set explicitly via
    **Edit** on that goal instead
  - **Withdraw from a goal through the Check Register** — when logging a
    deposit, an optional **From** field lets you pick "From savings:
    &lt;goal&gt;" instead of leaving it as regular income. That deposit
    still counts as real income (the money did land back in checking), but
    it's also subtracted from the goal's total, so pulling $100 out of an
    emergency fund shows up as a dip in its progress bar right away
  - Every transaction that's touched a goal — contributions from its
    linked category and withdrawals logged against it — is listed at the
    bottom of that goal, newest first, so you can see exactly what added up
    to its current total. Click any of them to jump straight to editing it
- **Reclass a redeposit against a category** — for when you pull out more
  cash (or otherwise spend) than you end up using and put some of it back:
  say $400 gets withdrawn and logged as an expense under "Other," but only
  $250 actually gets spent, so the leftover $150 goes back into the bank.
  Logging that as a deposit, the same optional **From** field used for
  savings withdrawals also offers "Reclass to: &lt;category&gt;" for every
  category you have. Picking it still counts the deposit as real income
  (the money did land back in checking), but it's also subtracted from
  that category's spending total for the month everywhere that total shows
  up — Budget vs. Actual, the "Spending by category" chart, and the
  category's own drill-down (which lists the reclassed deposit as its own
  line, in green, right alongside the expenses it's offsetting, so the
  numbers always reconcile). Unlike a goal withdrawal, this nets against
  the category as a whole rather than tying to one specific expense — it
  doesn't matter which withdrawal the leftover cash technically came from,
  only that the category's true spending is $150 less than what was
  originally logged. Mutually exclusive with a savings withdrawal on the
  same deposit — a deposit is regular income, a goal withdrawal, or a
  category reclass, never more than one
- **Search** (magnifying-glass icon, top right) — find any expense or
  income entry by note, source, category, amount, or date, no matter what
  month it's in or whether it's been assigned to a paycheck yet. Every
  result has a **Where** badge — **Check Register** or **CC Register** —
  so you can tell at a glance which table it actually lives in (a credit
  card charge only ever lives on the CC Register; a card payment is a real
  bank transaction, so it's a Check Register row that also shows up
  linked on the CC Register — hover the badge for the specifics). Click a
  result to jump straight to it — no edit panel in the way — landing you
  on the right tab (Check Register or CC Register) with that row lit up in
  a light red/pink highlight so it's easy to spot, and it's already
  editable right there on the row. A card payment highlights on both
  registers at once, since it's a real row in each. The highlight clears
  as soon as you navigate to a different tab
- Calendar view showing when recurring bills are due (as labeled tags in
  their category color, amount included right next to the name, with a red
  checkmark once that occurrence is marked paid) and every recurring
  payday highlighted across the whole day in a color you choose yourself,
  with a legend and month navigation — click any bill or payday to open
  and edit it. A one-time expense or deposit doesn't show up here — the
  Calendar is a schedule of what repeats every month, not a full ledger;
  find those in the Check Register or on the Dashboard instead
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
  **Date** to go back to plain chronological order. The **Balance** column
  itself is no longer a sortable column — it recalculates instead: it's
  always a running total of exactly the rows currently on screen, added up
  top to bottom in whatever order they're displayed, so it stays reconcilable
  against a bank statement no matter how you've filtered or sorted (see the
  filter note below)
  - **Uncleared rows always sink to the bottom**, no matter which column
    the table's currently sorted by (Date, Payee, whatever) — so an
    unreconciled transaction never sits in the middle of the list
    throwing off the balance you're checking against while going down
    your bank statement. The moment you check a row off **cleared**, it
    drops right back into its normal place in the current sort order. The
    one exception is sorting explicitly BY the **✓** column itself —
    clicking that header is already a deliberate cleared/uncleared
    grouping, so it's left as a plain sort instead of adding another
    grouping on top of it. Same behavior on the **CC Register**
- **Check Register tab**: a full-width ledger styled like a desktop
  checkbook register (QuickBooks-style) — two lines per transaction, a
  **balance column** that runs down the page so you can reconcile against
  your bank statement, and a sticky header. It's the whole browser window
  wide on purpose, and only the register itself scrolls (top to bottom) —
  the page never scrolls sideways, no matter how many transactions you have
  - **No separate "Add income"/"Add expense" cards** — type a new
    transaction straight into the blank line at the bottom: date, payee,
    an amount in either **Payment** or **Deposit**, a **category**, and
    optionally a **bank account** (see below). Assigning it to a paycheck
    is entirely optional and happens after adding it, right on its own
    row — see below
  - Every existing transaction's top line shows date, payee, payment or
    deposit, a **cleared** checkbox, a **paid** checkbox (expenses only —
    income doesn't have a "paid" state), and balance; the muted line right
    underneath holds its **category**, its **bank account**, a
    **Paycheck** field, and Delete — change any of those right there, no
    extra clicks
  - **Every field is directly editable right on the row** — date, payee/
    description, amount, cleared, paid, category, bank account, and
    paycheck — nothing opens a separate panel anymore; each change saves
    the moment you leave the field or press Enter. A transaction linked to
    a recurring bill
    shows a small **Linked to &lt;bill&gt;** tag instead, with its own
    **Unlink** button — see the note on automatic recurring-bill linking
    under the Dashboard section above. Jumping in from **Search**, the
    **Dashboard**, a category, or the
    **Paycheck Planner** still opens the full edit panel above the
    register — that's just a quick way to land on the right entry from
    elsewhere, and that panel still has its own **Delete** button, so you
    can remove an entry right from any of those drill-downs instead of
    backing out to find its row first
  - A From/To date-range filter, plus a **category** filter and a **bank
    account** filter, right at the top next to the "Check register"
    heading, narrow what's shown. **The Balance column recalculates from
    exactly what's visible.** A date-range filter still seeds Balance from
    your real Beginning balance, since you're looking at a slice of actual
    time — the numbers stay a true reflection of your account, just
    starting partway through. A **category or bank-account filter is
    different: it hides the Beginning balance row entirely and starts
    Balance fresh from zero**, since a category slice (say, every
    Utilities transaction) or a single bank account isn't a point in time
    and has nothing to do with your real full bank balance — showing the
    Beginning balance there would be misleading. What you get instead is a
    pure running total of just what's visible, so filtering to "Utilities"
    (or to "Chase Checking") and adding up what you spent tells you
    exactly that. Clear the filters to see the true, full-history running
    balance again. **To** defaults to today (not blank) both here and on
    the CC Register, so future-dated entries -- an already-logged upcoming
    bill, a post-dated charge -- don't clutter the view by default; clear
    or push out **To** any time you want to see them, and **Clear
    filters** resets it back to today rather than wiping it blank
  - **Bank accounts** are a separate, optional label from category — a
    category (Groceries, Insurance, ...) is what you spent on; a bank
    account is which real account the money moved through (Chase
    Checking, a savings account, whatever you actually bank with). Manage
    the list under **Categories & Budgets** — name, an optional
    **starting balance**, and an optional **as of** date, the same shape a
    credit card gets — then tag any Check Register row with one from its
    own **Bank** dropdown and use the filter above to see just that
    account's activity. By default every account's transactions still add
    up to one combined Balance in the register itself, same as before this
    existed — the Check Register's own Balance column, and its bank-account
    filter, are unchanged. Skipping it entirely (leaving every row as "No
    account") behaves exactly like the register always has. Give an account
    a starting balance, though, and it gets its own **reconciliation
    window** below the Check Register — see below
  - **Bank account reconciliation.** Below the Check Register itself, every
    bank account you've added gets its own window, plus one final
    **Unassigned** window for any transaction with no bank account tagged
    at all. Unlike the Check Register's own Balance column — a quick
    running sum of only whatever rows are currently visible, always
    starting fresh at zero the moment a filter narrows things down — each
    reconciliation window shows a **true point-in-time balance**: it walks
    that account's full transaction history in real chronological order,
    seeded from the account's own starting balance and (optionally) an "as
    of" date, exactly like a credit card's ledger. Set an account's
    starting balance and, if you don't want everything counted all the way
    back, an as-of date under **Categories & Budgets** — anything dated
    before that as-of date shows a **—** instead of a balance and doesn't
    count toward the running total, since the seed already reflects
    everything up to that point. Each window has its own **From/To**
    filter (defaulting to the 1st of the current month through today on
    first load, independent per window and per account after that), shows
    up to **7 transactions per page** with Prev/Next paging, and lets you
    check off **cleared** right there while you reconcile — everything
    else (date, payee, category, amount) is still edited up in the Check
    Register itself, so **clicking anywhere on a row** (other than its
    cleared checkbox) jumps straight up to that same transaction's row in
    the Check Register, highlighted and scrolled into view, ready to edit
    — same as clicking a Search result. The From/To filter only changes
    which already-balanced rows are currently displayed; it never changes
    the balance math, so the number next to any row is always that
    account's real running total up to that date, not a sum of only what's
    on screen
  - **Applying category defaults to untagged transactions.** If you had
    expenses or income logged before bank accounts existed (or before you
    started tagging them), a button under **Categories & Budgets** — "Apply
    category defaults to untagged transactions" — does a one-time sweep:
    any expense with no bank account and no credit card, whose category has
    a **default bank account** set, gets tagged with it; same for income
    that's been reclassed against a category with a default. It only fills
    in blanks — a row you've already tagged (by hand or automatically) is
    never touched — and it's entirely manual, so nothing changes in your
    data until you click it. Regular income (not reclassed against a
    category) has no category to pull a default from, so it's left alone —
    tag it by hand from its own row, or from the Unassigned reconciliation
    window
  - **Transferring money between your own bank accounts** — checking to
    savings, say — isn't spending, so there's a dedicated **Transfer between
    accounts** card under **Categories & Budgets** (shown once you have at
    least two bank accounts) instead of forcing it through a category. Pick
    a date, a **From** account, a **To** account, an amount, and an optional
    note, and it logs both sides at once: a withdrawal in the From
    account's own Check Register / reconciliation window, and a matching
    deposit in the To account's — so both balances stay accurate without
    entering it twice, and the combined Balance up top nets to zero, same as
    real life (it's still your money, it just moved). Each leg's detail row
    shows a plain "Transfer to: `<account>`" / "Transfer from: `<account>`"
    label instead of an editable Category or From field, live-linked to its
    other half rather than a category — editing the **amount** or **date**
    on either leg updates the other to match, so the two can never quietly
    drift apart, while **cleared** stays independent per leg since each
    side's real bank can clear on a different day. **Deleting either leg
    deletes both** (confirmed once, up front) rather than leaving one side
    orphaned. Transfers are never counted as spending or income anywhere
    totals are shown (Dashboard, Budget vs. actual, category totals) —
    they're excluded the same way a credit card payment already is
  - **A bank account can be linked to a savings goal**, for when an account
    IS a real savings goal's actual money — an actual "Ally Savings" account
    you're using as your Emergency Fund, say, not just a virtual bucket.
    Pick it from the **Linked savings goal** field on the "Add account" form
    or the Bank accounts table's own column (Categories & Budgets). Once
    linked, any **Transfer** touching that account automatically counts
    toward the goal too, using the exact same mechanics a manual goal
    contribution/withdrawal already uses: transferring money *into* a
    goal-linked account tags that leg with the goal's own linked category,
    so it counts as a **contribution** (the goal still needs its own
    category link set up on the Dashboard for this to actually register —
    the transfer form warns you with a toast if it doesn't yet); transferring
    money *out of* one tags the deposit leg with the goal's id, so it counts
    as a **withdrawal**. A transfer between two different goal-linked
    accounts applies both at once — a withdrawal from one goal and a
    contribution to the other, exactly as you'd expect. Each affected leg's
    detail row in the Check Register spells out the goal it touched (e.g.
    "counts under Savings" or "withdrawn from Emergency Fund"), and deleting
    a goal just clears the link off any account pointing to it rather than
    breaking anything
  - **Categories can have a default bank account**, so you don't have to
    pick one by hand on every single transaction. Set it in the "Add a
    category" form or right in the **Categories & Budgets** table's own
    Bank account column — then the moment you pick that category on the
    Check Register's blank new-transaction row, its Bank field pre-fills
    to match (still changeable before you add it). Recategorizing an
    *existing* row does the same, but only when that row's Bank field is
    still blank — it never overwrites an account you already picked by
    hand. A recurring bill's auto-logged placeholder inherits its
    category's default the same way. It's genuinely just a default, not a
    lock: pick a different account any time, for any one transaction,
    without changing the category's setting
  - Bank transactions you import (see CSV import below) land here
    automatically, flagged with a red **✗** and a red-outlined field until
    you assign a real account to them — once you do, the flag clears itself
  - A **Beginning balance** row is always pinned at the very top, in
    italics, not linked to any category or paycheck — it's just an amount
    (and, if you want, a date) you set once to match whatever your bank
    account actually held before you started tracking here. Click its date
    or its balance to edit either one directly; every balance below it
    shifts to match, so the running balance is a true reflection of your
    account instead of starting from zero. It disappears while a category
    or bank-account filter is active — see the filter bullet above
  - **Pure bank activity only.** A credit card charge doesn't touch your
    checking account the moment you make it, so it never shows up here or
    counts against this running balance — it only lives on the **CC
    Register**. The only credit-card-related entry you'll ever see in the
    Check Register is an actual **Pay down: &lt;card&gt;** payment, since
    that's real money leaving your bank account. (Earlier versions of this
    app listed every card charge here too and subtracted it from the
    running balance immediately, then subtracted it again when the
    matching payment posted — a real double-count bug, now fixed.)
- **Paycheck assignment is optional on every expense, but only required for
  recurring bills.** The whole point of assigning a bill to a paycheck is
  to know what not to spend so you're not left short — that matters most
  for the committed, recurring payments (rent, utilities, subscriptions,
  debt), and those get a paycheck assigned automatically wherever
  possible: from **Recurring** tab defaults, **Log now**, or the
  **Paychecks** tab. But a **Paycheck** field is available right on every
  expense's row in the Check Register too, recurring or not — so a
  one-off expense (an extra card payment, an irregular purchase you still
  want to budget against a specific check) can be earmarked the same way,
  purely as a reminder. Nothing requires picking one; it defaults to
  **None** and stays that way unless you choose otherwise. The **Split**
  button (dividing a bill's amount across two paychecks) stays limited to
  bills that are actually paycheck-trackable — a one-off expense doesn't
  have a recurring amount to split the same way
- **Only recurring income counts as a "paycheck" too.** The same logic
  applies on the income side — a "paycheck" is something you plan bills
  against ahead of time, which only makes sense for income that actually
  recurs (a salary or biweekly payday from the **Recurring** tab). A
  one-off deposit typed into the Check Register (a gift, a tax refund,
  a single freelance payment) still counts fully toward your income
  totals and running balance, but it never shows up as a block in the
  **Paychecks** tab or the Dashboard's "This month's paychecks" row, and it's never
  offered as a paycheck to assign a bill to
- **Paychecks tab**: the **paycheck planner** — for each paycheck, assign
  the recurring bills it needs to cover (right from the Check Register, or
  from the dropdown here), check them off as you pay them, and see what's
  left over to spend
  - **Collapse or expand each paycheck's activity** with the arrow next to
    its name — collapsing tucks away its bill table, summary row, and
    assign row, while still showing the assigned/leftover totals and the
    paycheck amount right in the header, so it's easy to skim past
    paychecks you've already sorted out without losing sight of the
    numbers that matter
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
- **CC Register**: track what you owe on each credit card completely
  separately from what you spend it on. Add a card (name, starting balance,
  as-of date) at the top of the **CC Register** tab, where a row of cards
  shows every card's current balance at a glance, styled like the
  Dashboard's paycheck row — as of today, specifically; a charge or payment
  dated in the future (e.g. one early-logged from the Paycheck Planner)
  stays visible in the ledger below but doesn't move the balance until its
  date actually arrives. Log a transaction into the ledger below it the
  same way you would in the Check Register — pick the card it goes on, and
  the row underneath it lets you set the real spending **category** (e.g.
  Shopping), so a card charge still counts toward that category's budget.
  Mark it a **charge** (adds to the card's balance) or a **payment**
  (reduces it, and isn't counted as spending since it's just paying down a
  balance you already counted when you charged it). Older data from the
  previous "mark a category as a loan or credit card" feature migrates
  automatically into its own card the first time you open the app after
  updating. Recording a card payment from the **Check Register** instead?
  Its Account dropdown (both the blank quick-add row and the inline editor
  on every existing row) offers a **Pay down: &lt;card&gt;** option
  alongside your regular categories — pick that instead of a category and
  it posts straight to that card's balance and shows up on the CC Register
  automatically, so you never have to enter the same payment twice. The
  same **Pay down: &lt;card&gt;** option is also available on the
  **Recurring** tab's Category field, for a card payment that happens on a
  schedule (a minimum payment, an autopay) — it auto-logs and updates that
  card's balance right along with your other recurring bills. The ledger
  also has a running **Balance** column (each card's own balance right
  after that transaction, same idea as the Check Register's) and every
  other column header — Date, Card, Type, Amount, cleared — is
  click-to-sort, same as the Check Register (Balance itself isn't
  sortable, for the same reason noted below). A payment entered via the
  Check Register, expense form, or a recurring "Pay down" item shows up
  here tinted light blue with a "via Check Register" note, so it's clear
  at a glance which payments were entered elsewhere versus directly on
  this tab. Since a payment isn't spending, it never has a category — the
  Category field is simply absent for payment rows (both existing rows
  and the blank add-row), whether the payment came from the Check
  Register or was entered directly here. It also has its own filter row
  — From/To date range, a specific card, and a specific category — so a
  big ledger is easy to narrow down, and the running **Balance** column
  recalculates per card from exactly what's visible, same as the Check
  Register. A date range or a single-card filter still seeds each card's
  Balance from its real starting balance, since that's still a true slice
  of that card's actual history; a **category filter zeroes it instead**
  (and, on the Check Register, hides the Beginning balance row) — a
  category slice isn't tied to any point in time, so treating it as a
  continuation of the card's real balance would be misleading. Clear the
  filters to see the true running balance again. Every field on an
  existing row — Date, Description, Amount, Category,
  Card, Type, and cleared — is editable right in place, no separate edit
  screen needed. A payment that matches a recurring card bill (same card
  and type) links to it automatically, the same way the Check Register
  does — see the note on automatic recurring-bill linking under the
  Dashboard section above. A transaction dated
  after today shows **upcoming** instead of a dollar balance, since it
  hasn't posted yet — that keeps the ledger's running balance in
  agreement with the "Current balance" card above, which is also always
  as-of-today only. The ledger sorts oldest-first by default (same as the
  Check Register), so a newly-added transaction lands at the bottom next
  to the blank add-row instead of jumping to the top.

  A card's **As of** date is optional — leave it blank and every
  transaction you've logged for that card counts toward its balance, all
  the way back. Only set a date there if you want the running balance to
  start fresh from a specific point on; anything dated earlier than that
  won't show a balance. (Earlier versions of this app defaulted a blank
  "As of" to today, which silently hid the balance on any already-logged
  history — if a card you set up a while ago still shows "—" balances on
  old transactions, open Edit on that card and clear its As of field.)

  Anywhere a transaction's category shows up as a label — Search results,
  the Recurring table, the Paycheck Planner, Dashboard's recent
  transactions — a credit card payment now reads **"Pay down: &lt;card&gt;"**
  instead of "(deleted category)"; that label was only ever meant for a
  category that was genuinely deleted after being assigned, not for a
  payment that never had a category to begin with.
- **Import bank transactions from a CSV** — most banks, including Bank of
  America, let you download recent transactions as a CSV from their
  website; upload it under Settings and the app maps the columns
  automatically (with manual override if needed), splits deposits from
  charges, and skips duplicates on re-import. Imported expenses land in the
  Check Register flagged for review until you assign a real category to
  each one. Nothing is uploaded anywhere — the file is only read in your
  browser
- Export to CSV (opens directly in Excel/Google Sheets) or export a full
  JSON backup you can re-import later or on another device. The CSV export
  has a **Check Register** / **CC Register** checkbox pair (both on by
  default) so you can export just one side if that's all you need — a
  card payment is included whenever either box is checked, since it's a
  real bank transaction that also shows up linked on the CC Register — and
  every row carries a **Register** column so it's still labeled once it's
  open in Excel. Every row also carries a **Type** column using the exact
  same words the app itself uses on screen — **Payment** for money leaving
  the Check Register (a plain expense or a card payment), **Deposit** for
  income (or **Deposit (reclass)** for one reclassed against a category —
  see above), and **Charge** for a CC Register charge — and the **Amount**
  column is signed to match: negative for a Payment, positive for a
  Deposit or a Charge (mirroring how a charge adds to what a card owes,
  the same +charge/-payment math the card balance itself uses). That means
  the column sums correctly and reads at a glance in Excel — no more
  opening every row to tell a payment from a deposit. A **Bank Account**
  column trails everything else with whatever name you tagged that row
  with (blank if you didn't, and always blank for a CC Register charge,
  since that's a credit card, not a bank account) — handy for splitting
  the export by real account in Excel once you're tracking more than one
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
