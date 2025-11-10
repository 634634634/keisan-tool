// storage.js

const DB_KEYS = {
    CUSTOMERS: 'invoice_tool_customers',
    PRODUCTS: 'invoice_tool_products',
    PRICES: 'invoice_tool_prices'
};

// --- 初期データ ---
const initialData = {
    customers: [
        // ★★★ 変更点: 統一伝票関連のプロパティを追加 ★★★
        { id: 'c1', name: 'A株式会社', taxable: true, useUnifiedSlip: true, companyCode: '12345-ABC' },
        { id: 'c2', name: 'B商店', taxable: false, useUnifiedSlip: false, companyCode: '' }
    ],
    products: [
        { id: 'p101', name: '商品X' },
        { id: 'p102', name: '商品Y' },
        { id: 'p103', name: '商品Z' }
    ],
    prices: [
        { customerId: 'c1', productId: 'p101', price: 1000 },
        { customerId: 'c1', productId: 'p102', price: 1500 },
        { customerId: 'c2', productId: 'p101', price: 980 },
        { customerId: 'c2', productId: 'p103', price: 2000 }
    ]
};

function initializeData() {
    // 古いデータ構造との互換性のため、一度クリアしてから再設定するのも有効です。
    // ここでは単純に存在チェックのみ行います。
    // もし新しい項目が反映されない場合は、開発者ツールでlocalStorageをクリアしてください。
    if (!localStorage.getItem(DB_KEYS.CUSTOMERS)) {
        saveCustomers(initialData.customers);
    }
    if (!localStorage.getItem(DB_KEYS.PRODUCTS)) {
        saveProducts(initialData.products);
    }
    if (!localStorage.getItem(DB_KEYS.PRICES)) {
        saveCustomerPrices(initialData.prices);
    }
}

// --- データアクセス用のヘルパー関数 ---
function getCustomers() { return JSON.parse(localStorage.getItem(DB_KEYS.CUSTOMERS)) || []; }
function saveCustomers(customers) { localStorage.setItem(DB_KEYS.CUSTOMERS, JSON.stringify(customers)); }
function getProducts() { return JSON.parse(localStorage.getItem(DB_KEYS.PRODUCTS)) || []; }
function saveProducts(products) { localStorage.setItem(DB_KEYS.PRODUCTS, JSON.stringify(products)); }
function getCustomerPrices() { return JSON.parse(localStorage.getItem(DB_KEYS.PRICES)) || []; }
function saveCustomerPrices(prices) { localStorage.setItem(DB_KEYS.PRICES, JSON.stringify(prices)); }
