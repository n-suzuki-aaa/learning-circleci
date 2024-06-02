require 'rails_helper'

RSpec.describe User, type: :model do
  user = User.new(
    name: "John",
    email: "john@example.com",
  )

  it "name と email を持ったユーザーを登録できること" do
    # オブジェクトをexpectに渡す動作が有効であることを確認
    expect(user).to be_valid
  end

  it "ユーザーの保存を行えること" do
    # user.save が成功することを確認
    expect { user.save }.to change { User.count }.by(1) 
  end
end
