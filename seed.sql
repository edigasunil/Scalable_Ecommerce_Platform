USE scalable_ecommerce;

-- Insert sample users
INSERT INTO users (name, email, password)
VALUES
('John Doe', 'john@example.com', '$2b$10$wH6/8QdQ0C6EoQ1aMZxvUeZHc2a3ZrUoh5kV6BMeW9eBfE0uzRqQG'), -- password: secret123
('Jane Smith', 'jane@example.com', '$2b$10$hGQ1a2OePj9zF3bJvK8lpuXzI0dZnA5YlI5V4v7qX5zFvY2eD8QyO'); -- password: password456

-- Insert sample products
INSERT INTO products (name, description, price, stock)
VALUES
('Laptop', 'High performance laptop', 1200.00, 10),
('Smartphone', 'Latest smartphone model', 799.99, 25),
('Headphones', 'Noise-cancelling headphones', 199.99, 50);

-- Insert sample cart items
INSERT INTO cart (user_id, product_id, quantity)
VALUES
(1, 1, 1),
(1, 3, 2),
(2, 2, 1);
