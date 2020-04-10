const URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate'
const key =
  'trnsl.1.1.20200402T073604Z.5e0a1c6ef8908ff2.1d9f47a542cbb4137295b6f2632d8e4f17c9ed24'

const translate = async (text, from, to) => {
  const lang = from + '-' + to

  try {
    const res = await fetch(
      URL + '?key=' + key + '&text=' + text + '&lang=' + lang + '&format=plain'
    )
    const data = await res.json()
    switch (data.code) {
      case 200:
        return data.text[0]
      case 422:
        return 'Không thể dịch văn bản, vui lòng thử lại'
      case 412:
        return 'Độ dài văn bản quá lớn'
      default:
        return 'Không thể dịch lúc này, vui lòng thử lại sau'
    }
  } catch (err) {
    console.error(err)
  }
}

export { translate }
