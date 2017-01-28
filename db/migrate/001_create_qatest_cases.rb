class CreateQatestCases < ActiveRecord::Migration
  def change
    create_table :qatest_cases do |t|
      t.text      :description
      t.string    :tags
      t.integer   :qatest_suite_id
      t.integer   :author_id
      t.integer   :project_id
      t.integer   :position
      t.boolean   :active, :default => true
      t.timestamps
    end

    create_table :qatest_suites do |t|
      t.string    :name
      t.integer   :parent_id
      t.integer   :project_id
      t.integer   :position
      t.integer   :author_id
    end

    add_index :qatest_cases, [:id, :qatest_suite_id, :project_id], :name => 'qa_testsuite_cases'
  end
end
