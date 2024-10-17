<script setup>
import { ref } from 'vue';
import { themeColor } from "@/data/items";
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const heading1 = "Pricing";
const heading2 = "Features comparison";
const subHeading1 = "Access nationwide lifestyle data instantly.";
const subHeading2 = "Our per-seat pricing gives you flexibility to choose the level you need.";
const subHeading3 = "Upgrade any time.";
const subHeading4 = "All prices exclude GST";
const subHeading5 = "Choose the access level that suits your needs";

const starterButtonName = "Create Account";
const proButtonName = "Buy Now";

// State to track whether user selected monthly or annually
const billingCycle = ref('monthly');  // Default to 'monthly'

// Monthly and Annual prices for the packages
const packages = [
  {
    name: "STARTER SEAT",
    monthlyPrice: "Free",
    annualPrice: "Free",
  },
  {
    name: "PRO SEAT",
    monthlyPrice: "$395/month",
    annualPrice: "$240/month", // Save more with annual
  },
  {
    name: "ADVANCED SEAT",
    monthlyPrice: "$890/month",
    annualPrice: "$540/month", // Save more with annual
  },
];
const checkmark = '✔️';
const cross = '❌';
// Function to get the current price based on selected billing cycle
const getPrice = (pkg) => {
  return billingCycle.value === 'monthly' ? pkg.monthlyPrice : pkg.annualPrice;
};
</script>

<template>
  <div class="untree_co-section bg-light" id="pricing-section">
    <div class="container">
      <!-- Pricing Title -->
      <div class="row mb-4" data-aos="fade-up" data-aos-delay="0">
        <div class="col-12 text-center clearfix">
          <h2 class="heading1">
            <span>{{ heading1 }}</span>
          </h2>
          <span class="sub-heading">{{ subHeading1 }}</span><br />
          <span class="sub-heading">{{ subHeading2 }}</span><br />
          <span class="sub-heading">{{ subHeading3 }}</span><br />
          <span class="sub-heading float-end">{{ subHeading4 }}</span>
        </div>
      </div>

      <!-- Billing Cycle Toggle Buttons -->
      <div class="row justify-content-center billing-toggle">
        <div class="col-lg-6 text-center">
          <button class="btn btn-outline-primary me-2" :class="{ 'btn-primary': billingCycle === 'monthly' }"
            @click="billingCycle = 'monthly'">
            Monthly billing
          </button>
          <button class="btn btn-outline-primary" :class="{ 'btn-primary': billingCycle === 'annually' }"
            @click="billingCycle = 'annually'" data-bs-toggle="tooltip" data-bs-placement="top"
            data-bs-custom-class="custom-tooltip" data-bs-title="This top tooltip is themed via CSS variables.">
            Annual billing
          </button>
        </div>
      </div>
      <!-- Pricing Cards -->
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="pricing card h-100 cards">
                <div class="card-body body">
                  <div class="price">
                    <span class="d-block plan starter">{{ packages[0].name }}</span>
                    <span class="price starter">{{ getPrice(packages[0]) }}</span>
                    <p class="italic">Upgrade anytime</p>
                    <p>Get started fast with immediate access to nationwide lifestyle data</p>
                  </div>
                  <div class="divider"></div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>Data refreshed monthly</li>
                    <li>Nationwide data access</li>
                    <li>View 9,300 locations</li>
                    <li>Save up to 3 reports</li>
                  </ul>
                </div>
                <div class="card-footer">
                  <p class="text-center mb-0">
                    <a href="#" class="btn btn-outline-primary"
                      :style="[{ color: themeColor }, { borderColor: themeColor }]">
                      {{ starterButtonName }}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 pro-section" data-aos="fade-up" data-aos-delay="200">
              <div class="pricing active  card h-100 bg-pro cards">
                <div class="card-body body bg-pro" data-bs-toggle="tooltip" data-bs-title="Save 40% paying annually">
                  <div class="price">
                    <span class="d-block plan pro">{{ packages[1].name }}</span>
                    <span class="price pro">{{ getPrice(packages[1]) }}</span>
                    <p class="italic">Pay upfront for $2,900 +GST. Invoicing available</p>
                    <p>Best for professionals with project-specific needs</p>
                  </div>
                  <div class="divider"></div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>NEW: 1 custom location</li>
                    <li>All Starter features</li>
                    <li>Historic behavioural data</li>
                    <li>Time of day analysis</li>
                    <li>Additional report tools</li>
                    <li>Data download functionality (PNG/CSV)</li>
                    <li>Save up to 50 reports</li>
                  </ul>
                </div>
                <div class="card-footer">
                  <p class="text-center mb-0">
                    <a href="#" class="btn btn-primary"
                      :style="[{ backgroundColor: themeColor }, { borderColor: themeColor }]">
                      {{ proButtonName }}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div class="pricing card h-100 cards">
                <div class="card-body body">
                  <div class="price">
                    <span class="d-block plan advanced">{{ packages[2].name }}</span>
                    <span class="price advanced">{{ getPrice(packages[2]) }}</span>
                    <p class="italic">Pay upfront for $6,480 +GST. Invoicing available</p>
                    <p>Best for researchers with complex or comparative data needs</p>
                  </div>
                  <div class="divider"></div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>NEW: 1 custom location</li>
                    <li>All Pro features</li>
                    <li>PDF Report download</li>
                    <li>Explorer Tool across Australia</li>
                    <li>API Access (Price on application)</li>
                  </ul>
                </div>
                <div class="card-footer">
                  <p class="text-center mb-0">
                    <a href="#" class="btn btn-outline-primary"
                      :style="[{ color: themeColor }, { borderColor: themeColor }]">
                      {{ proButtonName }}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-4" data-aos="fade-up" data-aos-delay="0">
        <div class="col-12 text-center clearfix">
          <h2 class="heading2">
            <span>{{ heading2 }}</span>
          </h2>
          <span class="sub-heading">{{ subHeading5 }}</span><br />
        </div>
      </div>
      <div class="container py-5">
        <table class="table align-middle text-center">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col" class="text-primary">
                <h3>STARTER</h3>
              </th>
              <th scope="col" class="text-pro table-pro">
                <h3>PRO</h3>
              </th>
              <th scope="col" class="text-info">
                <h3>ADVANCED</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">NEW: Custom location</th>
              <td>{{ cross }}</td>
              <td class="table-pro">1 location, any size</td>
              <td>1 location, any size</td>
            </tr>
            <tr>
              <th scope="row">Platform coverage</th>
              <td>Australia</td>
              <td class="table-pro">Australia</td>
              <td>Australia</td>
            </tr>
            <tr>
              <th scope="row">Data refreshes</th>
              <td>Monthly</td>
              <td class="table-pro">Monthly</td>
              <td>Monthly</td>
            </tr>
            <tr>
              <th scope="row">Public location available</th>
              <td>9,300</td>
              <td class="table-pro">9,300</td>
              <td>9,300</td>
            </tr>
            <tr>
              <th scope="row">Save public reports</th>
              <td>3</td>
              <td class="table-pro">50</td>
              <td>50</td>
            </tr>
            <tr>
              <th scope="row">Historic behavioural data</th>
              <td>{{ cross }}</td>
              <td class="table-pro">{{ checkmark }}</td>
              <td>{{ checkmark }}</td>
            </tr>
            <tr>
              <th scope="row">Time of day analysis</th>
              <td>{{ cross }}</td>
              <td class="table-pro">{{ checkmark }}</td>
              <td>{{ checkmark }}</td>
            </tr>
            <tr>
              <th scope="row">Data download</th>
              <td>{{ cross }}</td>
              <td class="table-pro">PNG + CSV</td>
              <td>PNG + CSV</td>
            </tr>
            <tr>
              <th scope="row">Report sharing</th>
              <td>Digital sharing</td>
              <td class="table-pro">Digital sharing</td>
              <td>Digital sharing + PDF</td>
            </tr>
            <tr>
              <th scope="row">Data Add Ons</th>
              <td>{{ cross }}</td>
              <td class="table-pro">Pay-as-you-go</td>
              <td>Pay-as-you-go</td>
            </tr>
            <tr>
              <th scope="row">API Access</th>
              <td>{{ cross }}</td>
              <td class="table-pro">{{ cross }}</td>
              <td>Available (quoted on request)</td>
            </tr>
            <tr>
              <th scope="row">Explorer Tool</th>
              <td>{{ cross }}</td>
              <td class="table-pro">+$700/location</td>
              <td>Nationwide</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container">
      <div class="faq">
        <div class="faq-header">
          <h2 style="color: #9c27b0">FAQs</h2>
        </div>
        <div class="faq-lists">
          <div class="accordion questions accordion-first">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h3>What’s included in the new bundles released 1 July 2024?</h3>
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <p>On 1 July 2024 we updated our access bundles to make the process of buying and setting up
                    simpler.</p>
                  <p>Every new seat purchased - Pro or Advanced - now includes a custom location of your choice at no
                    additional cost.</p>
                  <p>Custom locations will also be refreshed monthly</p>
                  <p>This means you can enjoy instant reporting for 9,300 public locations across Australia, AND
                    lifestyle data tailored to your specific location of interest.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion questions">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <h3>How many users are included?</h3>
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <p>The prices quoted are for a single 'seats', meaning a single email address for annual or monthly
                    billing cycles.</p>
                  <p>However if you'd like to share access with your colleagues, they can utilise our Starter seats at
                    no cost.</p>
                  <p>We find that it's common for teams to start with one or two paid seats (Pro or Advanced) for
                    regular users, and irregular users utilise the free Starter accounts. Starter users can easily
                    upgrade at any time if they want the depth of tools in the paid accounts.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion questions">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  <h3>Can I pay via invoice?</h3>
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <p>We can provide you with an invoice for annual billing. Just select 'request invoice' or contact us,
                    and we can arrange an invoice with 14 day terms.</p>
                  <p>Typically we require credit or debit card transactions to support monthly billing. However we
                    understand this may not work for everyone, so contact us to discuss your needs, and we may be able
                    to accommodate monthly invoicing.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion questions">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                  <h3>How do I cancel?</h3>
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <p>If you choose monthly billing, you can cancel anytime.</p>
                  <p>Contact us to cancel your account, and your cancellation will be processed within 24 hours.</p>
                  <p>You will then have access up until the end of your 'paid' calendar month period. For example, if
                    your monthly billing was on 11 June, and you cancel on 20 June, you will retain access until 10
                    July.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion questions">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                  <h3>What is the difference between Starter, Pro, and Advanced?</h3>
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <p>All accounts enjoy monthly data refreshes for 9,300 locations nationwide. Choose which access level
                    suits your needs.</p>
                  <p><strong>‍Starter</strong> is our Free account level. Starter enables you to get started fast with immediate access
                    to nationwide lifestyle data. Typically used by newbies wanting to get comfortable with lifestyle
                    data.</p>
                  <p>‍<strong>Pro</strong> is our entry level access for professional users. Pro seats include historic data, temporal
                    analysis, download functionality and other tools. Typically used by professional place managers to
                    support monthly place tracking</p>
                  <p><strong>‍Advanced</strong> is our access level. Advanced seats provide deeper functionality for all locations across
                    Australia, most notably by providing nationwide access to our Explore tool.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.untree_co-section {
  color: #242b6b;
  /* background: #ededed; */
  font-size: 18px;
  line-height: 1.667em;
}

.heading1 span {
  font-size: 70px;
  font-weight: 700;
  background: url("../images/tools-underline.svg");
  margin-left: -.275em;
  margin-right: -.275em;
  padding-bottom: 14px;
  padding-left: 15px;
  padding-right: 15px;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: scroll;
}

.row.mb-4 {
  padding-top: 5rem;
  display: flex;
  justify-content: center;
}

.row.mb-4 .col-12 {
  max-width: 625px;
}

.sub-heading.float-end {
  font-size: .8rem;
}

.btn {
  color: #4f4f4f;
  background-color: #ffffff;
  border-color: #4f4f4f;
}

.btn:hover {
  background-color: #ae44a6;
}

.btn.btn-primary {
  color: #ffffff;
}

.btn.btn-primary:hover {
  border-color: #4f4f4f;
}

.heading1,
.heading2 {
  color: #242b6b;
  font-size: 54px;
  font-weight: 700;
}

.starter {
  color: #4952be;
  margin: 16px 0;
  font-size: 26px;
  font-weight: 700;
}

.pro {
  margin: 16px 0;
  color: #ae44a6;
  font-size: 26px;
  font-weight: 700;
}

.advanced {
  margin: 16px 0;
  color: #2f9cc9;
  font-size: 26px;
  font-weight: 700;
}

.bg-pro {
  background-color: #f0eff5;
}


.divider {
  height: 1px;
  background: #d3d3d3;
  margin-top: 24px;
  margin-bottom: 48px;
}

.cards:hover {
  box-shadow: 0 8px 18px 0 #06060614;
  transform: translate3d(0, -8px, .01px);
}

.card-footer {
  border-top: none;
  padding: 24px 0;
}

.billing-toggle {
  margin-bottom: 80px;
}

.pro-section {
  margin-top: -50px;
}

.italic {
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
}

.btn-outline-primary:hover {
  /* background-color: white; */
}

.list-unstyled li {
  margin-bottom: 16px;
  font-weight: bold;
}

.list-unstyled li a {
  color: #242b6b;
  text-decoration: none;
}

.table-pro {
  background-color: #d3d3d3;
}

.pricing-table {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid red;
}

.pricing-header {
  display: flex;
  justify-content: space-around;
}

.pricing-column {
  flex: 1;
}

.pricing-row {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.pricing-feature {
  text-align: left;
  flex: 2;
  padding-left: 1rem;
}

/*test*/

.text-danger {
  color: #dc3545;
}

.text-success {
  color: #28a745;
}

.text-primary h3 {
  color: #3f51b5;
}

.text-pro h3 {
  color: #9c27b0;
}

.text-info h3 {
  color: #03a9f4;
}

table {
  color: #8c8c8c;
}

tbody tr th {
  font-size: 22px;
  font-weight: 500;
  padding: 32px;
  color: #4f4f4f;
}

.accordion.questions {
  margin: 16px 0;
}

.accordion-button h3 {
  color: #242b6b;
  font-size: 20px;
  padding: 12px;
}

.accordion-first h3 {
  color: #9c27b0;
  font-size: 20px;
  padding: 12px;
}

.accordion-body p {
  color: #242b6b;
}
</style>
