require 'test_helper'

class PetitionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @petition = petitions(:one)
  end

  test "should get index" do
    get petitions_url, as: :json
    assert_response :success
  end

  test "should create petition" do
    assert_difference('Petition.count') do
      post petitions_url, params: { petition: { category: @petition.category, detail: @petition.detail, title: @petition.title } }, as: :json
    end

    assert_response 201
  end

  test "should show petition" do
    get petition_url(@petition), as: :json
    assert_response :success
  end

  test "should update petition" do
    patch petition_url(@petition), params: { petition: { category: @petition.category, detail: @petition.detail, title: @petition.title } }, as: :json
    assert_response 200
  end

  test "should destroy petition" do
    assert_difference('Petition.count', -1) do
      delete petition_url(@petition), as: :json
    end

    assert_response 204
  end
end
