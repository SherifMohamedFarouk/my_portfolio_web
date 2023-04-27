'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "69988e827d637b039ba6d92af16cbfdd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ce8ebdc001b320b5b2165c3d988cc8f3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "506f85b3de54eb2475d1d6edbf168e5a",
".git/logs/refs/heads/main": "8a22559cfc4915a5b1c061901c056e98",
".git/logs/refs/remotes/origin/main": "649ca429339b4c67d579e8770dbf8163",
".git/objects/04/49eb46b0bee7f86658a1c36e2f2ac7519d9160": "141de11cca87412aa0872567aebf4808",
".git/objects/04/ade46ec31152f239b73d10d4d0dad21b610a92": "6c0f703e7c6dd55e761107485ca19457",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/08/d3b25d9af275ac2512b5841503321224347a30": "4662d7b7e2d8c27a2c05762efd1a2ae5",
".git/objects/09/90e84b3e57c8f47fecbe59defef14fd2af0c78": "156c60ff0746e57d2ab8f938f979e8d6",
".git/objects/0a/89fba833b8213a32c456ccd0497aec7496fe6c": "49e60616551fc320d9a0260814aefd9d",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/6315512946b6557412350074c2c8cd09529340": "180d2d7726bc4899425769862097705d",
".git/objects/15/b2a6b6f99137e5779e7d61adb810f9e07dcde6": "f9f3d9abdc03626df0254a0881ba717b",
".git/objects/1a/0c7fd64be0f4c7fe9599a0c35b54c9f14b0ff9": "466f3ce7a00bfb024f20ef3e5db99acc",
".git/objects/1f/3ef4093d2c55cc41abecd30ca4d785da386a70": "38fd25d021b534714d7004f2d111e9a2",
".git/objects/20/82c5454f07acdcd497958af15ae652ce3aecac": "124dca91136de391798dc845fabbb763",
".git/objects/22/a055fd024873c32c0779973b3ebbf676832b9a": "925d00caf54e27e0f1e0c8a32a56f8b6",
".git/objects/23/e38811fff34be031fc38c4f096fd17d15bdc35": "276094a3c75560af89bdb70912403015",
".git/objects/25/7d221b0e55fb6bb93d4dcb477ddb972cc0f721": "53f5545d62f685e5c32e1ce54b88afbf",
".git/objects/25/99838917064adad55f63c1391f33d59f8c7aad": "42ebb7f21d4f57fdb706ef37897de0d4",
".git/objects/28/da81819370fc2967ff2fb1804bffd42db9d3be": "d2abf4cb6fa288245e3b8ccde63016b6",
".git/objects/2a/d082a557fa2e1a1719e238e49eeba9b5f8bcf0": "0f374374865df01f0e1a06dd4a62128e",
".git/objects/2c/58c7591994631eeeebbacc0c493d72e01e744e": "4741310f91176cbcbd943060a97614ea",
".git/objects/2e/db730c4dd8933532052f287096552e08537a29": "8666a29785967526f1185d9a8a3e1ad6",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3c/1613ec7d4d6a9d4e77049e0dc4ecd232fc923f": "6ce6ac0efd8e2d6e2c76ffffa95a0cdb",
".git/objects/3c/f4d65c02f6360605bf0e3091e99a0a762b38a7": "c52f8ea03b8541b9e0fa9713f6cf0818",
".git/objects/40/c55ccf16cf30a761f62c8b10d36eda38df128a": "5514e90d30cc56e605a5753f7d0a6334",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/1330899abd805049f43f7f540d1368d5cbcffe": "d6fa26d227e7b5a21431dbd9a951e4f9",
".git/objects/44/bf6d2893e4915950c4ff053e312b18f607c042": "ff4acbed440d18d559f15e6b18d44d3e",
".git/objects/45/6b6302535a1525b9423cc896ca1217c3565765": "d28953b79bf182f54d5d9ba7f8ae854d",
".git/objects/47/1facddc8b844066833eef074ac2f4a427df832": "ddbef3ae3d9579dcd873a059be527d2e",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/9ec00a21082bb248bdb9ed7d066e3f0e5c73a0": "d3d4b81da0acf66af89e84afd18e9b52",
".git/objects/54/58df66be41ed2bb782fccc28fe4e0b5985b46d": "195e17d7ceecc3cd82c0a386bc0799bc",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/af7269466f153dc56809439e8e465da15d81ed": "2a2ffbfd180b9a7ebaa4843e4111c217",
".git/objects/5c/4464f9f3e30213f0cbade756be4b95048d770a": "b7e49f009a7f27e1cd1e06386707a390",
".git/objects/5f/a2fad2052c3a539d1f15f0b051d16e2e75696f": "28faabf0f71577ef7b5db0cfdbedd88e",
".git/objects/65/aea5fb47fa19ff3a99dc51aea23ed8d737b94d": "f98eda7d28473bc3aef049d54e555dbf",
".git/objects/66/3111128a916e111fd320c074ccec5b682cfbbb": "189e24c452af1f231743ad9cb221dd12",
".git/objects/66/773b973dff1fb5836c867f30edf7860a276c74": "2bd4fee546e2f1d4d492648ab3e46868",
".git/objects/67/41c41c49755e183549d3e835a3c36335cc35f3": "c668c62939b1257b484a6518a839550a",
".git/objects/68/acab5c26932975bbe11d75924bb32ccc86832a": "de31e6e338f872f08b5679c360de85ae",
".git/objects/69/993d677f2be0a43ba741d7eaa56135df52361d": "17c54851bbc638e3a1bcbbc2390c18a1",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/3b0890aafa5795ead1f4c2c62b6e30efe971d8": "62ce7f958423792b534a0f48b26a7fc5",
".git/objects/75/9a239ef79660bf965b3dcbe1cd5b15f46b9b02": "b57a959f1eb2d438e676470b10d29a7c",
".git/objects/77/01137ddc96ee787470d725847af3d617efdfc7": "6566b488c407f9b755e69fae42a3e3ab",
".git/objects/78/44ffe2bbca5d463a9556354e25c6c7908c3386": "81792a034584aaa24aaa2a94fd927d8e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/82/ae5fb4e4b3e4ef396b7c81cd5e9c0cf52f4322": "e23eae32f508bad6ca703b6df46b62c6",
".git/objects/84/4b58c23c9133e964b4887247eaf38702382d08": "15c10a8fc7f51d04666fd2df66649efa",
".git/objects/87/88720684d89d31d3dbf2d6a96f18233f329e94": "a3eb06b919cf720391c4f0438022cc6c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/014dae9c604efdcf4cd2ba573f36d4ee620533": "a40d28a240ee1024f3badb9e24acf173",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ba34d8b275b5c747d164b9d3d0b6a8e874fc5a": "7973760f4563779b35416db7381dc895",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/93/21d19691e8688f3860700a3c881ecdf52bbe6c": "3bffaa9c2c3577999bb4f65cfa145f53",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ee3d6edee8c23eb09bd89d428ecd4d5faebb1a": "11900b806f601339da37965eaca6cc0d",
".git/objects/a5/3a10ae1ff625c35dc815a08ba19ee7af87b42d": "d7ba2393e3a9135d14b7e5b2abde7cbf",
".git/objects/a6/f668fadeb55831aa7af1ae9201ed508c79382e": "59d6b9b900d906823ce9663789696811",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/b0/f75b0f38d26a7e0035b6f351fe0b389058078f": "701575f5092a31696d83d67e3ca3e1e3",
".git/objects/b1/97dd46ee9780452b72cc9823c813f60277ee22": "f5392562d138e3f81dd8481e34a5518e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5f68d2c170072c18fa7c24263c828679c7f122": "e4a4fb223dbf70c807c0121a001db299",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/c6/463d40bb00b11e6848df4595a72ece9e90c84a": "8341160dc789d8b399ad034e47444e8b",
".git/objects/c6/eefa62d8799545e6a5475633e75fe9efd8340e": "06b0d15acfd17d830bdf01d70ed9ddee",
".git/objects/c7/a9930ed83d5a1999281fee733134c1a9b46362": "0b95f21617cf93f97024b421b5086519",
".git/objects/ce/0668e65937c19720573395ecbc9a8cad3fc132": "9fa0df2cfbe1f132a5f897e2000a3f54",
".git/objects/cf/d10edb3ee262c287a6a8069d24fd89a88a6c12": "6a33b9ae6907ff5b3e92d5572eb911e9",
".git/objects/cf/e9fd3bcc8f3330f017d6e878c21caec28c9872": "5ff1141ae0ab89e9bd1a783c8e6ab97f",
".git/objects/d2/fce358f0f0bddaa82ca6fc1862ddd2c8b532d3": "c49371a7efab6167f6bbebaf49061f86",
".git/objects/d4/f3e8dfc42028d1916b9d8850b5f8b41dd3d41c": "081916f5d4589cee60bd1fd165f79a31",
".git/objects/d6/85510874af238852c0c9fec81b9c5b0f870fce": "ae2fde46017d827b97ba52ebae2b75b9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b987be480c519f0eb2325f7695e15f16c52857": "56904095062295de7b1c064a218fa593",
".git/objects/d7/800f201cd14fc579d5eee0b4de7c85aa9a7768": "21f8c55ef7e33eb57aa58771c840c9e3",
".git/objects/de/91ec1b0a97ad26c77173a4c952c4d6e713ea93": "a9e64e86934232e50bc8ffb55db019d1",
".git/objects/e2/b191837df5c2253e8002a5f5542fa647a1d608": "9e806dfa8fc1656b4b133962e4125459",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/64f354fb0a9cee1e0170d02910eb6f3794c50d": "70e5f2ee739d09616c44ea4db299a88d",
".git/objects/ea/a83b1718783ade35406badc9d32e8c8d30606d": "fb8ff977513472b27aee5d17836999ac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0681612bdc58b4b6570ac902abafd6da4997ac": "336a70ab3fc12300ad7ea7ed5abc18c9",
".git/objects/ef/0ec239cd3f3662483853cafe2d308357eb38f2": "717cb72d3f70f53a3f41eec3af4329ad",
".git/objects/f0/1b4fc6a9d76013020455d6518d11ed174d592b": "ce7cb219a4c2e2dcfa3f71ec4ab1ee3a",
".git/objects/f0/253718b490d6bad9d02181839e404ba9ca6ab4": "04a5047e5198c7e73814d03e1a3bbc7e",
".git/objects/f3/d62675534556ecdb733af044bdb73ace0a66f1": "8dddde2b671f9404bd5aa95c6617de6a",
".git/objects/f4/05cd67b3b1d245dd4c20bc7cb4754bc0d2ba75": "902942bf57a4fa824691e4a3f6cfaf1e",
".git/objects/f6/8c05937b5511e5991a72ff49446131610f6241": "a774c41fda6faf1e7f375a92e55efaa5",
".git/objects/f6/e8daec2050e4f5bd26fa5cc29fcbb49f7c6148": "7136a1838aa1a0fe52ec4fc5d7029b94",
".git/objects/fa/e3024e948b2ff54f078c65ff70cd9f536454d1": "4d80bcf70ec6331dbc4ab81f632c523f",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/c85fa45d6a7c3e59aa91fa8cb6a0dd13f3cd49": "7a40f3c0580dd129f0ab214e4fb56304",
".git/refs/heads/main": "5e624dd712e938363d120968a5da3884",
".git/refs/remotes/origin/main": "5e624dd712e938363d120968a5da3884",
"assets/AssetManifest.json": "7473b8429094fd7214a9aa312303b204",
"assets/assets/alienz/unnamed.png": "6f1bdaa087f7441359b4eb66dc6b61b6",
"assets/assets/alienz/unnamed1.png": "6afb4ff51887f22714f3f88babecb87e",
"assets/assets/alienz/unnamed2.png": "c6cdd1436290e9e7b8ebbce93820940f",
"assets/assets/alienz/unnamed3.png": "57bebb34fe5d108dce5d265f6fe60b59",
"assets/assets/alienz/unnamed4.png": "da66b047e75535903e1cfdc0717f0f7a",
"assets/assets/alienz/unnamed5.png": "829aea5b723fdd9a7fa38ec8d6d12fb1",
"assets/assets/appfusewebsites/Capture.PNG": "6892f727cdcbd0bc62b4b62a96afe8a5",
"assets/assets/appfusewebsites/Capture2.PNG": "94149730d5ba4ae888a3dcde454dc7e4",
"assets/assets/appfusewebsites/Capture3.PNG": "50c4e666386b25a7ac9c3ca161caf315",
"assets/assets/appfusewebsites/Capture4.PNG": "21463429d8da2dae45b9e92cbc8be96e",
"assets/assets/easylife/Capture.PNG": "033836edf1ddc7104c8c5b952c015310",
"assets/assets/easylife/Capture2.PNG": "e4e85884118d4c9f6a5a0da20f3cca0f",
"assets/assets/easylife/Capture3.PNG": "308afd92042926db32a5c5ca66cfc4b7",
"assets/assets/easylife/Capture4.PNG": "a7d2016526db499b4280591c0fbbf733",
"assets/assets/easylife/Capture5.PNG": "a6cf3c4c27d775422669cb9bc9077667",
"assets/assets/easylife/Capture6.PNG": "dbb342139c4b8ef735df4c193d9f7707",
"assets/assets/easylife/Capture7.PNG": "307c65afa6e19cec9dd9849333e8edee",
"assets/assets/easylife/Capture8.PNG": "25335916cc77b046bac18c5763620c98",
"assets/assets/easylife/Capture9.PNG": "46b77128b8278fe2f9b43c022184fe73",
"assets/assets/images/android.png": "0c299f712ce78d0f4b1f7bf63a0301d7",
"assets/assets/images/Capture1.PNG": "cfbb1d24b61c1eb71adeb5ecf3d95dd1",
"assets/assets/images/Capture2.PNG": "7251f1c90efbc3775f923536a802d121",
"assets/assets/images/Capture3.PNG": "941b2d409c5fc48cfa7734d7461361ff",
"assets/assets/images/dark.png": "18312f496dfccd337f06c903f08e2379",
"assets/assets/images/flutter.png": "950081990a4a60c32cfe4fcdbebfcd21",
"assets/assets/images/Home.png": "48a3b3e39507a29bd8d6bd015059c75d",
"assets/assets/images/light.png": "c5e777c2e0b0ec9079fdddb5ec879dcb",
"assets/assets/images/Login%252001.png": "67968d2b4416b21a5aa89cbde52fdd6a",
"assets/assets/images/profile.jpg": "bbae5aad17377bf111fb7d06eb0d4694",
"assets/assets/images/screen1.png": "c6296706c26a52a45adea5e09ddea5f3",
"assets/assets/images/screen2.png": "f258d47f484bacf98807aa31472cbe0e",
"assets/assets/images/screen3.png": "c7b0ac7758bc193eca984ef07baf48cd",
"assets/assets/images/Sherif%2520Farouk%2520Resume.pdf": "7337f58f642acd551832d2545aa35456",
"assets/assets/images/Spash%2520Screen.png": "23b7e69f5d2b595cffbafd379c6d0822",
"assets/assets/images/vlens1.png": "ec881ec13615908364f8030969978e50",
"assets/assets/images/vlens2.png": "55826c06a63a47b3cc6a1a90c23c777b",
"assets/assets/images/vlens3.png": "a4ef2a861f76109333f9a7ac1d245d96",
"assets/assets/purplebureau/Capture.PNG": "df666d147d71c566879d26ff1420591b",
"assets/assets/purplebureau/Capture2.PNG": "ea35033b09db755ae0f22abb463275f5",
"assets/assets/purplebureau/Capture3.PNG": "170b395dc16d1d44f6830c0ab241411a",
"assets/assets/purplebureau/Capture4.PNG": "641e42fcdc76cdc0da20824fca40317a",
"assets/assets/truzi/Capture.PNG": "d8c4db8f0becce1f64e43e0b191b52e7",
"assets/assets/truzi/Capture1.PNG": "cba32cb160249a8e02fd1e367ef5da65",
"assets/assets/truzi/Capture2.PNG": "4faad26305121a81cc1796d88a58ecdf",
"assets/assets/truzi/Capture3.PNG": "8220c69e7959553994bf3f0b46a614b1",
"assets/assets/truzi/Capture4.PNG": "4669b78c07ed956c5c3201d7c05f4a79",
"assets/assets/truzi/Capture5.PNG": "d9c7f3e4cd6013ab0059f21970c0c8c5",
"assets/assets/truzi/Capture6.PNG": "90e4163a50f368254c68cae5f46b3712",
"assets/assets/truzi/Capture7.PNG": "e04537ea98f403648db664b120d4d124",
"assets/assets/yojad/Capture.PNG": "daeee5249c35a122738bfd27df34cd5c",
"assets/assets/yojad/Capture2.PNG": "b35e67992bf521d26662f0dea2d6a4ae",
"assets/assets/yojad/Capture3.PNG": "17a24229042cedad7f90b81f500f4505",
"assets/assets/yojad/Capture4.PNG": "a88a902cb01d82fc0f801bbc8ffdc0ee",
"assets/FontManifest.json": "6a84e6c28a318c1ef29352d8cf66d39c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "5664ecb73215dfe8088c4f77771aa5c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "dd74f11e425603c7adb66100f161b2a5",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "780859860e9cc5221680d8ed432c99ca",
"/": "780859860e9cc5221680d8ed432c99ca",
"main.dart.js": "b2fef9f8344f1d18a0618e32b9c5be57",
"manifest.json": "2a27fb33f6d0532222215a292b9138b5",
"pngtree.jpg": "1423a72a548459dcdc57c23993bf2fec",
"version.json": "a278e46a1de5ba4354fffb22e9652252"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
