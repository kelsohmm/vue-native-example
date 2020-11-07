const DevelopmentConfig = {
  isDevelopmentMode: true
};

const ProductionConfig = {
  isDevelopmentMode: false,
};

export default function(envType) {
  let config = envType === "development" ? DevelopmentConfig : ProductionConfig;
  console.log(`Using config: ${JSON.stringify(config)}`);
  return config;
}
