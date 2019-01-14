# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_07_182323) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string "title"
    t.text "story"
    t.string "writer"
    t.string "source"
    t.date "publishedDate"
    t.integer "likes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "members", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "email"
    t.bigint "number"
    t.string "organizationName"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "petitions", force: :cascade do |t|
    t.string "title"
    t.string "category"
    t.text "detail"
    t.string "Organizers_Name"
    t.text "summary"
    t.bigint "signatureCount"
    t.integer "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_petitions_on_author_id"
  end

  create_table "signatures", force: :cascade do |t|
    t.text "signature"
    t.bigint "petition_id"
    t.bigint "member_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id"], name: "index_signatures_on_member_id"
    t.index ["petition_id"], name: "index_signatures_on_petition_id"
  end

end
