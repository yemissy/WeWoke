# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Member.destroy_all
  Petition.destroy_all
  Article.destroy_all
  #
  #
  members = Member.create!([
    {
      firstName: 'Missy',
      lastName: 'Onayemi',
      email: 'aa@comm',
      number: '7179807676',
      organizationName: '',
      password: '123aaa'
    },
    {
      firstName: 'Missy1',
      lastName: 'Onayemi34',
      email: 'aa@coperate',
      number: '7179807676',
      organizationName: '',
      password: 'aaabcb'
    },
    {
      firstName: 'Missy66',
      lastName: 'Onayemi67',
      email: 'aa@yahoo.com',
      number: '7179807676',
      organizationName: '',
      password: 'abcabc'
    }
    ])
    petitions = Petition.create!([
      {
        title: 'money for school',
        category: 'fundraising',
        detail: 'We are building schools for kids in Tanzania',
        signatureCount: 0,
        Organizers_Name: 'Missy',
        author_id: 1
      }
      ]);
      resp = HTTParty.get('https://newsapi.org/v2/everything?q=blacklivesmatter&apiKey=72e67456d4fb4850837e259879ad46f5', :verify => false).parsed_response

      resp["articles"].each do |article|
        puts article
        Article.create!([{
          title: article["title"],
          story: article["description"],
          writer: article["author"],
          source: article["source"]["name"],
          publishedDate: article["publishedAt"],
          likes: 0
        }])
      end
