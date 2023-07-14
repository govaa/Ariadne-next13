import { Client } from "@elastic/elasticsearch";
import type { Client as NewTypes } from "@elastic/elasticsearch/api/new";
import { DB_CLUSTER } from "@/types/elasticsearch";

// @ts-expect-error @elastic/elasticsearch
const client1: NewTypes = new Client({
  node: "https://52.28.162.238:9200",
  auth: {
    username: "elastic",
    password: "0z4al1fyB0spsQ3lrQtg",
  },
  ssl: {
    rejectUnauthorized: false,
  },
});
// @ts-expect-error @elastic/elasticsearch
const client2: NewTypes = new Client({
  node: [
    "https://3.123.243.39:9200",
    "https://18.157.148.228:9200",
    "https://3.66.200.79:9200",
    "https://18.157.195.47:9200",
    "https://3.127.18.236:9200",
  ],
  auth: {
    username: "elastic",
    password: "DfgbH6QCiPO2GW6hbbLO",
  },
  ssl: {
    rejectUnauthorized: false,
  },
});
// @ts-expect-error @elastic/elasticsearch
const client3: NewTypes = new Client({
  node: [
    "https://3.97.188.177:9200",
    "https://3.98.180.200:9200",
    "https://3.99.28.194:9200",
    "https://3.99.84.2:9200",
  ],
  auth: {
    username: "elastic",
    password: "qLs3vJFbGX3HBiWYC14d",
  },
  ssl: {
    rejectUnauthorized: false,
  },
});

function getEsClient(cluster: DB_CLUSTER) {
  if (cluster === "eu-single") {
    return client1;
  }
  if (cluster === "ca-cluster") {
    return client3;
  } else return client2;
}

export default getEsClient;
