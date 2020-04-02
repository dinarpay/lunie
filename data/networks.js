const { getNetworkCapabilities } = require('./network-capabilities')

module.exports = [
  {
    id: 'cosmos-hub-testnet',
    title: 'Gaia Testnet',
    chain_id: 'gaia-13007',
    rpc_url: 'wss://gaia-13007.lunie.io:26657/websocket',
    api_url:
      'http://gaia-13007--lcd--archive.datahub.figment.network/apikey/124a234fb3c6bccf430bfd298bd160ae',
    bech32_prefix: 'cosmos',
    address_prefix: 'cosmos',
    address_creator: 'cosmos',
    ledger_app: 'cosmos',
    network_type: 'cosmos',
    source_class_name: 'source/cosmosV2-source',
    block_listener_class_name: 'block-listeners/cosmos-node-subscription',
    testnet: true,
    ...getNetworkCapabilities[`cosmos-hub-testnet`],
    default: false,
    stakingDenom: 'MUON',
    coinLookup: [
      {
        chainDenom: 'umuon',
        viewDenom: 'MUON',
        chainToViewConversionFactor: 1e-6
      }
    ],
    enabled: true,
    icon: 'https://app.lunie.io/img/networks/cosmos-hub-mainnet.png',
    slug: 'cosmos-hub-testnet',
    powered: {
      name: 'Figment',
      picture:
        'https://s3.amazonaws.com/keybase_processed_uploads/bd5fb87f241bd78a9c4bceaaa849ca05_360_360.jpg'
    }
  },
  {
    id: 'cosmos-hub-mainnet',
    title: 'Cosmos Hub',
    chain_id: 'cosmoshub-3',
    rpc_url: 'wss://cosmos-hub-3.lunie.io/websocket',
    api_url:
      'https://cosmoshub-3--lcd--archive.datahub.figment.network/apikey/7996efcecdc5ef91da3715eb60cd2201',
    bech32_prefix: 'cosmos',
    address_prefix: 'cosmos',
    address_creator: 'cosmos',
    network_type: 'cosmos',
    ledger_app: 'cosmos',
    source_class_name: 'source/cosmosV2-source',
    block_listener_class_name: 'block-listeners/cosmos-node-subscription',
    testnet: false,
    ...getNetworkCapabilities[`cosmos-hub-mainnet`],
    default: true,
    stakingDenom: 'ATOM',
    coinLookup: [
      {
        chainDenom: 'uatom',
        viewDenom: 'ATOM',
        chainToViewConversionFactor: 1e-6
      }
    ],
    enabled: true,
    icon: 'https://app.lunie.io/img/networks/cosmos-hub-mainnet.png',
    slug: 'cosmos-hub',
    powered: {
      name: 'Figment',
      providerAddress: 'cosmosvaloper1hjct6q7npsspsg3dgvzk3sdf89spmlpfdn6m9d',
      picture:
        'https://s3.amazonaws.com/keybase_processed_uploads/bd5fb87f241bd78a9c4bceaaa849ca05_360_360.jpg'
    }
  },
  {
    id: 'terra-mainnet',
    title: 'Terra',
    chain_id: 'columbus-3',
    api_url: 'https://fcd.terra.dev/',
    rpc_url: 'ws://52.78.43.42:26657/websocket',
    bech32_prefix: 'terra',
    address_prefix: 'terra',
    address_creator: 'cosmos',
    ledger_app: 'cosmos',
    network_type: 'cosmos',
    source_class_name: 'source/terraV3-source',
    block_listener_class_name: 'block-listeners/cosmos-node-subscription',
    testnet: false,
    ...getNetworkCapabilities[`terra-mainnet`],
    default: false,
    stakingDenom: 'LUNA',
    coinLookup: [
      {
        chainDenom: 'uluna',
        viewDenom: 'LUNA',
        chainToViewConversionFactor: 1e-6
      }
    ],
    enabled: true,
    icon: 'https://app.lunie.io/img/networks/terra-mainnet.png',
    slug: 'terra'
  },
  {
    id: 'terra-testnet',
    title: 'Terra Testnet',
    chain_id: 'soju-0013',
    api_url: 'https://soju-fcd.terra.dev',
    rpc_url: 'wss://terra-testnet.lunie.io/websocket',
    bech32_prefix: 'terra',
    address_prefix: 'terra',
    address_creator: 'cosmos',
    ledger_app: 'cosmos',
    network_type: 'cosmos',
    source_class_name: 'source/terraV3-source',
    block_listener_class_name: 'block-listeners/cosmos-node-subscription',
    testnet: true,
    ...getNetworkCapabilities[`terra-testnet`],
    default: false,
    stakingDenom: 'LUNA',
    coinLookup: [
      {
        chainDenom: 'uluna',
        viewDenom: 'LUNA',
        chainToViewConversionFactor: 1e-6
      }
    ],
    enabled: true,
    icon: 'https://app.lunie.io/img/networks/terra-testnet.png',
    slug: 'terra-testnet'
  },
  {
    id: 'emoney-mainnet',
    title: 'e-Money',
    chain_id: 'emoney-1',
    api_url: 'https://emoney.validator.network/light',
    rpc_url: 'wss://emoney.validator.network/websocket',
    bech32_prefix: 'emoney',
    address_prefix: 'emoney',
    address_creator: 'cosmos',
    ledger_app: 'cosmos',
    network_type: 'cosmos',
    source_class_name: 'source/emoneyV0-source',
    block_listener_class_name: 'block-listeners/cosmos-node-subscription',
    testnet: false,
    ...getNetworkCapabilities[`emoney-mainnet`],
    default: false,
    stakingDenom: 'NGM',
    coinLookup: [
      {
        chainDenom: 'ungm',
        viewDenom: 'NGM',
        chainToViewConversionFactor: 1e-6
      }
    ],
    enabled: true,
    icon: 'https://app.lunie.io/img/networks/emoney-mainnet.png',
    slug: 'emoney'
  },
  {
    id: 'emoney-testnet',
    title: 'e-Money Testnet',
    chain_id: 'lilmermaid-5',
    api_url: 'http://lilmermaid.validator.network/light',
    rpc_url: 'wss://lilmermaid.validator.network/websocket',
    bech32_prefix: 'emoney',
    address_prefix: 'emoney',
    address_creator: 'cosmos',
    ledger_app: 'cosmos',
    network_type: 'cosmos',
    source_class_name: 'source/emoneyV0-source',
    block_listener_class_name: 'block-listeners/cosmos-node-subscription',
    testnet: true,
    ...getNetworkCapabilities[`emoney-testnet`],
    default: false,
    stakingDenom: 'NGM',
    coinLookup: [
      {
        chainDenom: 'ungm',
        viewDenom: 'NGM',
        chainToViewConversionFactor: 1e-6
      }
    ],
    enabled: true,
    icon: 'https://app.lunie.io/img/networks/emoney-testnet.png',
    slug: 'emoney-testnet'
  },
  {
    id: 'polkadot-testnet',
    title: 'Kusama',
    chain_id: 'kusama-cc3',
    api_url: 'https://host-01.polkascan.io/kusama/api/v1/',
    rpc_url: 'wss://kusama-rpc.polkadot.io/',
    bech32_prefix: ' ',
    address_prefix: '2', // used in Polkadot as well to generate display addresses (https://wiki.polkadot.network/docs/en/learn-accounts)
    ledger_app: 'polkadot',
    address_creator: 'polkadot',
    network_type: 'polkadot',
    source_class_name: 'source/polkadotV0-source',
    block_listener_class_name: 'block-listeners/polkadot-node-subscription',
    testnet: true,
    ...getNetworkCapabilities[`polkadot-testnet`],
    default: false,
    stakingDenom: 'KSM',
    // https://wiki.polkadot.network/docs/en/learn-DOT
    coinLookup: [
      {
        chainDenom: 'Planck',
        viewDenom: 'KSM',
        chainToViewConversionFactor: 1e-12
      }
    ],
    enabled: false,
    icon: 'https://app.lunie.io/img/networks/polkadot-testnet.png',
    slug: 'kusama'
  }
  // {
  //   id: 'akash-testnet',
  //   title: 'Akash Testnet',
  //   chain_id: 'devnet',
  //   api_url: 'http://95.179.133.80:8080',
  //   rpc_url: 'wss://95.179.133.80:26657/websocket',
  //   bech32_prefix: 'akash',
  //   address_prefix: 'akash',
  //   address_creator: 'cosmos',
  //   ledger_app: 'cosmos',
  //   network_type: 'cosmos',
  //   source_class_name: 'source/akashV0-source',
  //   block_listener_class_name: 'block-listeners/cosmos-node-subscription',
  //   testnet: true,
  //   ...getNetworkCapabilities[`akash-testnet`],
  //   default: false,
  //   stakingDenom: 'STAKE', // this is only in my private testnet
  //   coinLookup: [
  //     {
  //       chainDenom: 'uakt',
  //       viewDenom: 'AKT',
  //       chainToViewConversionFactor: 1e-6
  //     }
  //   ],
  //   enabled: false,
  //   icon: 'https://app.lunie.io/img/networks/akash-testnet.png',
  //   slug: 'akash-testnet'
  // }
  // {
  //   id: 'livepeer-mainnet',
  //   title: 'Livepeer',
  //   chain_id: 'ethereum-1',
  //   api_url: 'https://livepeer-mainnet.lunie.io/',
  //   rpc_url: 'wss://livepeer-mainnet.lunie.io/websocket',
  //   bech32_prefix: '0x',
  //   address_prefix: '0x',
  //   address_creator: 'ethereum',
  //   ledger_app: 'ethereum',
  //   network_type: 'ethereum',
  //   source_class_name: 'source/livepeerV0-source',
  //   block_listener_class_name: 'block-listeners/livepeer-node-polling',
  //   testnet: false,
  //   feature_session: false,
  //   feature_explore: true,
  //   feature_portfolio: false,
  //   feature_validators: true,
  //   feature_proposals: false,
  //   feature_activity: false,
  //   feature_explorer: false,
  //   action_send: false,
  //   action_claim_rewards: false,
  //   action_delegate: false,
  //   action_redelegate: false,
  //   action_undelegate: false,
  //   action_deposit: false,
  //   action_vote: false,
  //   action_proposal: false,
  //   default: false,
  //   stakingDenom: 'LPT',
  //   enabled: false,
  //   icon: 'https://app.lunie.io/img/networks/livepeer-mainnet.png',
  //   slug: 'livepeer'
  // }
]
