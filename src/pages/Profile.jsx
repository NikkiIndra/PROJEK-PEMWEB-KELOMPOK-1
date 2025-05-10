import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Header from "../components/layout/Header";

const ProfilePage = () => {
  const userData = {
    name: "Nikki ",
    stats: {
      products: 24,
      expenses: "$1,250",
      inProgress: 3,
    },
    favoriteProducts: [
      { name: "Smartwatch", price: "$199", time: "2 days ago" },
      { name: "Bluetooth Speaker", price: "$89", time: "5 days ago" },
      { name: "Running Shoes", price: "$120", time: "1 week ago" },
    ],
  };

  const data = [
    { name: "Mon", total: 200 },
    { name: "Tue", total: 500 },
    { name: "Wed", total: 800 },
    { name: "Thu", total: 600 },
    { name: "Fri", total: 900 },
    { name: "Sat", total: 400 },
    { name: "Sun", total: 700 },
  ];

  return (
    <>
      <Header className="header-fixed" />
      <Container className="content-below-header">
        <Row>
          {/* User greeting and in-progress product */}
          <Col md={4}>
            <Card className="p-3 mb-4 card-hover">
              <div className="d-flex align-items-center mb-3">
                <Image
                  src="https://th.bing.com/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                  style={{ objectFit: "cover" }}
                  roundedCircle
                  width={100}
                  height={100}
                />
                <div className="ms-3">
                  <h5 className="mb-0">Hello {userData.name}!</h5>
                  <small className="text-muted">
                    Welcome back to your e-commerce dashboard
                  </small>
                </div>
              </div>
              <Card className="bg-indigo p-3">
                <h6 className="mb-1">In Progress Order</h6>
                <p className="mb-0">Product: Wireless Earbuds</p>
                <small>Est. delivery in 3 days</small>
              </Card>
            </Card>

            {/* Statistic Cards */}
            <Card className="p-3 mb-4">
              <Row>
                <Col>
                  <h6>Total Products</h6>
                  <h4>{userData.stats.products}</h4>
                </Col>
                <Col>
                  <h6>Total Expenses</h6>
                  <h4>{userData.stats.expenses}</h4>
                </Col>
                <Col>
                  <h6>Ongoing</h6>
                  <h4>{userData.stats.inProgress}</h4>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Chart and favorite products */}
          <Col md={8}>
            <Card className="p-3 mb-4 card-hover">
              <h5>Your Weekly Spending</h5>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="total"
                    stroke="indigo"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-3">
              <h5>Favorite Products</h5>
              {userData.favoriteProducts.map((product, idx) => (
                <Row
                  key={idx}
                  className="align-items-center border-bottom py-2"
                >
                  <Col md={6}>
                    <strong>{product.name}</strong>
                    <div className="text-muted">{product.time}</div>
                  </Col>
                  <Col md={3}>
                    <span>{product.price}</span>
                  </Col>
                  <Col md={3}>
                    <Button variant="outline-dark" size="sm">
                      View
                    </Button>
                  </Col>
                </Row>
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
