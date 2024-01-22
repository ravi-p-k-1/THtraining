CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    birth_date DATE,
    hire_date DATE,
    salary DECIMAL(10, 2),
    is_active BOOLEAN
);

CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(100)
);

CREATE TABLE employee_departments (
    employee_id INT REFERENCES employees(employee_id),
    department_id INT REFERENCES departments(department_id),
    PRIMARY KEY (employee_id, department_id)
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(8, 2)
);

CREATE INDEX idx_product_name ON products(product_name);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE,
    customer_name VARCHAR(100),
    total_amount DECIMAL(10, 2) CHECK (total_amount >= 0)
);

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    phone_number VARCHAR(20)
);

CREATE TABLE serial_example (
    serial_id SERIAL PRIMARY KEY,
    description VARCHAR(200)
);

CREATE TABLE json_example (
    id SERIAL PRIMARY KEY,
    data JSONB
);

CREATE TABLE logs (
    log_id SERIAL PRIMARY KEY,
    log_message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

----------------------------------------------------------------------------------

INSERT INTO employees (first_name, last_name, birth_date, hire_date, salary, is_active)
VALUES
    ('John', 'Doe', '1990-01-15', '2020-05-01', 60000.00, true),
    ('Jane', 'Smith', '1985-03-22', '2018-10-15', 75000.50, true),
    ('Alice', 'Johnson', '1995-08-10', '2021-02-28', 50000.75, false),
    ('Bob', 'Williams', '1982-11-05', '2017-08-10', 90000.25, true);

INSERT INTO departments (department_name)
VALUES
    ('Sales'),
    ('Finance'),
    ('HR'),
    ('IT');

INSERT INTO employee_departments (employee_id, department_id)
VALUES
    (1, 1),
    (2, 1),
    (3, 2),
    (4, 3),
    (4, 4);

INSERT INTO products (product_name, price)
VALUES
    ('Laptop', 1200.00),
    ('Smartphone', 800.50),
    ('Monitor', 300.75),
    ('Printer', 150.25);

INSERT INTO orders (order_date, customer_name, total_amount)
VALUES
    ('2022-01-10', 'Acme Corp', 1200.00),
    ('2022-02-15', 'XYZ Ltd', 800.50),
    ('2022-03-20', 'ABC Inc', 300.75),
    ('2022-04-25', 'Tech Solutions', 150.25);

INSERT INTO customers (email, phone_number)
VALUES
    ('john.doe@example.com', '+1234567890'),
    ('jane.smith@example.com', '+9876543210'),
    ('alice.johnson@example.com', '+1112233445'),
    ('bob.williams@example.com', '+4455667788');

INSERT INTO serial_example (description)
VALUES
    ('Serial Example 1'),
    ('Serial Example 2'),
    ('Serial Example 3');

INSERT INTO json_example (data)
VALUES
    ('{"name": "John", "age": 30, "city": "New York"}'),
    ('{"name": "Jane", "age": 25, "city": "San Francisco"}'),
    ('{"name": "Bob", "age": 40, "city": "Los Angeles"}');

INSERT INTO logs (log_message, created_at)
VALUES
    ('Log entry 1', '2022-01-01 08:00:00'),
    ('Log entry 2', '2022-01-02 10:30:00'),
    ('Log entry 3', '2022-01-03 12:45:00');
