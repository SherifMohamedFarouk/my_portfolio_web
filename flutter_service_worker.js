'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "599ac816f1af4949fe8fb1db71928143",
".git/config": "e5534cbc74a4450d4dc881d4c7ef10e6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4e2dd6d79fafd53ab00900191698110f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "e6deef88893c39a095be9ea1a4a74034",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "937b9535f995b69aac3b54cd793a5eaa",
".git/logs/refs/heads/master": "937b9535f995b69aac3b54cd793a5eaa",
".git/logs/refs/remotes/origin/main": "2c0756d926e435bd6b81fb3c2f4b40e8",
".git/logs/refs/remotes/origin/master": "7020f9f0bd95fca67e0e07679383309e",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/49eb46b0bee7f86658a1c36e2f2ac7519d9160": "141de11cca87412aa0872567aebf4808",
".git/objects/04/ade46ec31152f239b73d10d4d0dad21b610a92": "6c0f703e7c6dd55e761107485ca19457",
".git/objects/06/817aa06cefdf44e2b46f692ca612552b6d8c9d": "7ac18726dba9737221c8c2840d6dcb51",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/08/d3b25d9af275ac2512b5841503321224347a30": "4662d7b7e2d8c27a2c05762efd1a2ae5",
".git/objects/09/90e84b3e57c8f47fecbe59defef14fd2af0c78": "156c60ff0746e57d2ab8f938f979e8d6",
".git/objects/0a/89fba833b8213a32c456ccd0497aec7496fe6c": "49e60616551fc320d9a0260814aefd9d",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/4ce5cb13585d967f0a4b5f78bb25c67059070f": "0284680e369cb156bf21edc564337057",
".git/objects/10/b518b1110f42cb7b0b169df83b5baa5ff3c575": "5176b002377f8607085005d00bb80b75",
".git/objects/15/b2a6b6f99137e5779e7d61adb810f9e07dcde6": "f9f3d9abdc03626df0254a0881ba717b",
".git/objects/1a/0c7fd64be0f4c7fe9599a0c35b54c9f14b0ff9": "466f3ce7a00bfb024f20ef3e5db99acc",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/3ef4093d2c55cc41abecd30ca4d785da386a70": "38fd25d021b534714d7004f2d111e9a2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/82c5454f07acdcd497958af15ae652ce3aecac": "124dca91136de391798dc845fabbb763",
".git/objects/23/e38811fff34be031fc38c4f096fd17d15bdc35": "276094a3c75560af89bdb70912403015",
".git/objects/25/7d221b0e55fb6bb93d4dcb477ddb972cc0f721": "53f5545d62f685e5c32e1ce54b88afbf",
".git/objects/25/99838917064adad55f63c1391f33d59f8c7aad": "42ebb7f21d4f57fdb706ef37897de0d4",
".git/objects/28/da81819370fc2967ff2fb1804bffd42db9d3be": "d2abf4cb6fa288245e3b8ccde63016b6",
".git/objects/2a/d082a557fa2e1a1719e238e49eeba9b5f8bcf0": "0f374374865df01f0e1a06dd4a62128e",
".git/objects/2c/58c7591994631eeeebbacc0c493d72e01e744e": "4741310f91176cbcbd943060a97614ea",
".git/objects/2e/db730c4dd8933532052f287096552e08537a29": "8666a29785967526f1185d9a8a3e1ad6",
".git/objects/35/558823c1aa813495bdc4d5056ac118adf264f6": "0465da8ede3c80d3b1cd831890d18b7c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/04354803212d274c1f87d9dca4d226127271cb": "78cdc554d22f3fb0a0bc9a7a4db2fe84",
".git/objects/3c/1613ec7d4d6a9d4e77049e0dc4ecd232fc923f": "6ce6ac0efd8e2d6e2c76ffffa95a0cdb",
".git/objects/3c/f4d65c02f6360605bf0e3091e99a0a762b38a7": "c52f8ea03b8541b9e0fa9713f6cf0818",
".git/objects/40/c55ccf16cf30a761f62c8b10d36eda38df128a": "5514e90d30cc56e605a5753f7d0a6334",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/ff447808c976d7fcc36b2de5ff8fe81292f74b": "8a4a666f081534c2b26d2e807b87e41a",
".git/objects/44/1330899abd805049f43f7f540d1368d5cbcffe": "d6fa26d227e7b5a21431dbd9a951e4f9",
".git/objects/44/bf6d2893e4915950c4ff053e312b18f607c042": "ff4acbed440d18d559f15e6b18d44d3e",
".git/objects/45/6b6302535a1525b9423cc896ca1217c3565765": "d28953b79bf182f54d5d9ba7f8ae854d",
".git/objects/47/1facddc8b844066833eef074ac2f4a427df832": "ddbef3ae3d9579dcd873a059be527d2e",
".git/objects/47/91ce660d1e13c973fdf0edf36de720895db321": "11431302949cb2d4cd78f4800f312404",
".git/objects/4d/387c18fe6a8a686d5cf9b39c154a1e4851f4e2": "8406c942bb9f1df714ea639f6165ff67",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/425d4f5a456f6d443e199665c30bf8ba82f939": "493443b20497374f5f295077464b3d5c",
".git/objects/54/58df66be41ed2bb782fccc28fe4e0b5985b46d": "195e17d7ceecc3cd82c0a386bc0799bc",
".git/objects/58/af7269466f153dc56809439e8e465da15d81ed": "2a2ffbfd180b9a7ebaa4843e4111c217",
".git/objects/5a/d1dbca5a87ee6e95143e0b538652c69b1d4204": "9649c0fff0d44dcafbcdaabced23a976",
".git/objects/5f/a2fad2052c3a539d1f15f0b051d16e2e75696f": "28faabf0f71577ef7b5db0cfdbedd88e",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/aea5fb47fa19ff3a99dc51aea23ed8d737b94d": "f98eda7d28473bc3aef049d54e555dbf",
".git/objects/66/3111128a916e111fd320c074ccec5b682cfbbb": "189e24c452af1f231743ad9cb221dd12",
".git/objects/66/773b973dff1fb5836c867f30edf7860a276c74": "2bd4fee546e2f1d4d492648ab3e46868",
".git/objects/67/41c41c49755e183549d3e835a3c36335cc35f3": "c668c62939b1257b484a6518a839550a",
".git/objects/68/acab5c26932975bbe11d75924bb32ccc86832a": "de31e6e338f872f08b5679c360de85ae",
".git/objects/69/993d677f2be0a43ba741d7eaa56135df52361d": "17c54851bbc638e3a1bcbbc2390c18a1",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/74/3b0890aafa5795ead1f4c2c62b6e30efe971d8": "62ce7f958423792b534a0f48b26a7fc5",
".git/objects/77/01137ddc96ee787470d725847af3d617efdfc7": "6566b488c407f9b755e69fae42a3e3ab",
".git/objects/77/0a3dac060517ff4bc4bc793cab0d82522422ab": "eb3da1078d9f1ee7ab4b1b8fefc8f01c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/82/ae5fb4e4b3e4ef396b7c81cd5e9c0cf52f4322": "e23eae32f508bad6ca703b6df46b62c6",
".git/objects/84/4b58c23c9133e964b4887247eaf38702382d08": "15c10a8fc7f51d04666fd2df66649efa",
".git/objects/87/88720684d89d31d3dbf2d6a96f18233f329e94": "a3eb06b919cf720391c4f0438022cc6c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/014dae9c604efdcf4cd2ba573f36d4ee620533": "a40d28a240ee1024f3badb9e24acf173",
".git/objects/89/eeb1d646d5ddb303f195111369b7ab875b2136": "66ad5979595aeed197c2f7adc3951e0c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ba34d8b275b5c747d164b9d3d0b6a8e874fc5a": "7973760f4563779b35416db7381dc895",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/9a/194618611285617cc187d5c00b2bac93066505": "0031a0b0d297c349929b0866f5622593",
".git/objects/9b/62f8085118bddcf9b30bb057970b31b678d864": "eb0b81c3ae9fc1e7ee8a05d462185c76",
".git/objects/9b/e1a7fc3ed019ec7ce93a1e1bad3beab893181d": "41c6ba4a33e56a439a6a608534779315",
".git/objects/9f/7c44b260c89554b7ca44d8deb12853dd22a4eb": "4aa279c42a726a85cc4eb6ca0dfd1dd9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ee3d6edee8c23eb09bd89d428ecd4d5faebb1a": "11900b806f601339da37965eaca6cc0d",
".git/objects/a3/7fc76cdd0833e29e13088ed96f4c38b6bd4f52": "045ca773443753f60411ad9553c305a5",
".git/objects/a5/3a10ae1ff625c35dc815a08ba19ee7af87b42d": "d7ba2393e3a9135d14b7e5b2abde7cbf",
".git/objects/a6/f668fadeb55831aa7af1ae9201ed508c79382e": "59d6b9b900d906823ce9663789696811",
".git/objects/b0/f75b0f38d26a7e0035b6f351fe0b389058078f": "701575f5092a31696d83d67e3ca3e1e3",
".git/objects/b1/97dd46ee9780452b72cc9823c813f60277ee22": "f5392562d138e3f81dd8481e34a5518e",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/9476d041111191a478794ae9c75032d173903b": "96833842e463b1ea78fa938ef394e5d2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5f68d2c170072c18fa7c24263c828679c7f122": "e4a4fb223dbf70c807c0121a001db299",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/c6/463d40bb00b11e6848df4595a72ece9e90c84a": "8341160dc789d8b399ad034e47444e8b",
".git/objects/c6/eefa62d8799545e6a5475633e75fe9efd8340e": "06b0d15acfd17d830bdf01d70ed9ddee",
".git/objects/c8/6770c8acb2f753d2a667164bae5a9ee1763786": "60d7a32189048a0d6e3387db9ce05d32",
".git/objects/cb/559fa2a46a9e3e8efe97136770501f12cd76e9": "178bb75c6772cff4eca2502779e09ced",
".git/objects/cd/af65d97d4328bd535b29c64d0eed544fd96ae0": "bf2627cb541147d3024f4f1040e8a33e",
".git/objects/ce/0668e65937c19720573395ecbc9a8cad3fc132": "9fa0df2cfbe1f132a5f897e2000a3f54",
".git/objects/cf/d10edb3ee262c287a6a8069d24fd89a88a6c12": "6a33b9ae6907ff5b3e92d5572eb911e9",
".git/objects/cf/e9fd3bcc8f3330f017d6e878c21caec28c9872": "5ff1141ae0ab89e9bd1a783c8e6ab97f",
".git/objects/d1/7cb2f6fcba9c570202076b319f939ff8f9693f": "c02f5a9160a4e8194f046c84bd3d2d16",
".git/objects/d2/fce358f0f0bddaa82ca6fc1862ddd2c8b532d3": "c49371a7efab6167f6bbebaf49061f86",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/f3e8dfc42028d1916b9d8850b5f8b41dd3d41c": "081916f5d4589cee60bd1fd165f79a31",
".git/objects/d5/2cd08f8b2f8fb86746e0a96686a56781d54e22": "fb25a272f383fc72b2732901f7ddc752",
".git/objects/d5/4b2926d20c72615eed84739055d8495c50b45a": "dac8dfd54bdbe13cbe6895122d9d2ebc",
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
".git/objects/f0/1b4fc6a9d76013020455d6518d11ed174d592b": "ce7cb219a4c2e2dcfa3f71ec4ab1ee3a",
".git/objects/f0/253718b490d6bad9d02181839e404ba9ca6ab4": "04a5047e5198c7e73814d03e1a3bbc7e",
".git/objects/f3/d62675534556ecdb733af044bdb73ace0a66f1": "8dddde2b671f9404bd5aa95c6617de6a",
".git/objects/f4/05cd67b3b1d245dd4c20bc7cb4754bc0d2ba75": "902942bf57a4fa824691e4a3f6cfaf1e",
".git/objects/f6/8c05937b5511e5991a72ff49446131610f6241": "a774c41fda6faf1e7f375a92e55efaa5",
".git/objects/fc/085e36bc6ba347f3688d24f35fcf39b796cc58": "cc6bc0152321a3aef48175d2745122ba",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/c85fa45d6a7c3e59aa91fa8cb6a0dd13f3cd49": "7a40f3c0580dd129f0ab214e4fb56304",
".git/objects/pack/pack-6da253b1cbf367aa8805ae0fe0222ae2525daf45.idx": "52757e8549a7bc95ccf68a0f44ee0756",
".git/objects/pack/pack-6da253b1cbf367aa8805ae0fe0222ae2525daf45.pack": "a01b39a3c904da2c1cfcac5e0f281776",
".git/ORIG_HEAD": "2d9cf7585ae27db0a207149cef9e24cd",
".git/refs/heads/master": "a9f2266f56cfec78a67e993d02e441aa",
".git/refs/remotes/origin/main": "e6b6acaeab85ad2f67d41220c1440720",
".git/refs/remotes/origin/master": "a9f2266f56cfec78a67e993d02e441aa",
"assets/AssetManifest.bin": "a5a4841bad82df179dca70b32f6def4d",
"assets/AssetManifest.json": "37488ceb293de9c62fb442edbfffe945",
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
"assets/assets/cars/cars1.png": "c4b971ead233456f0c3c4cb8680139d6",
"assets/assets/cars/cars2.png": "891d6e6ae8b218be9c1a3f4b500504ac",
"assets/assets/cars/cars3.png": "8bf193dad731f51c7daa9fadf3df2f11",
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
"assets/assets/images/anime1.png": "dc79b967cb0983cb08675223815b566f",
"assets/assets/images/anime2.png": "4dac144037a5e925c288f55c7a4be228",
"assets/assets/images/anime3.png": "75f1fd223abca2efb7f6b6f2daa6442f",
"assets/assets/images/Capture1.PNG": "cfbb1d24b61c1eb71adeb5ecf3d95dd1",
"assets/assets/images/Capture2.PNG": "7251f1c90efbc3775f923536a802d121",
"assets/assets/images/Capture3.PNG": "941b2d409c5fc48cfa7734d7461361ff",
"assets/assets/images/dark.png": "18312f496dfccd337f06c903f08e2379",
"assets/assets/images/flutter.png": "950081990a4a60c32cfe4fcdbebfcd21",
"assets/assets/images/Home.png": "48a3b3e39507a29bd8d6bd015059c75d",
"assets/assets/images/light.png": "c5e777c2e0b0ec9079fdddb5ec879dcb",
"assets/assets/images/Login%252001.png": "67968d2b4416b21a5aa89cbde52fdd6a",
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
"assets/NOTICES": "44d746d657a6b0421c683ef97837f9a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "dd74f11e425603c7adb66100f161b2a5",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bfcab6180e5d7e5cde8439d4b6768c92",
"/": "bfcab6180e5d7e5cde8439d4b6768c92",
"main.dart.js": "7c02b5f2945546fdc9dc8f1a49f78ea3",
"manifest.json": "2a27fb33f6d0532222215a292b9138b5",
"pngtree.jpg": "1423a72a548459dcdc57c23993bf2fec",
"version.json": "a278e46a1de5ba4354fffb22e9652252"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
